<template>
  <v-container>
    รายงานสินค้า
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="3"
          ><v-text-field
            v-model="no_p"
            :rules="no_pRules"
            :counter="5"
            label="รหัสสินค้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="3">
          <v-text-field
            v-model="name_p"
            :counter="30"
            :rules="name_pRules"
            label="ชื่อสินค้า"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="brand"
            :rules="brandRules"
            :counter="10"
            label="ยี่ห้อสินค้า"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="model"
            :rules="modelRules"
            :counter="10"
            label="รุ่นสินค้า"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="n"
            :rules="nRules"
            :counter="10"
            label="จำนวนสินค้า"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="weight"
            :rules="weightRules"
            :counter="10"
            label="จำนวนน้ำหนัก"
            required
          ></v-text-field
        ></v-col> 
        <v-col cols="3"
          ><v-text-field
            v-model="wide"
            :rules="wideRules"
            :counter="10"
            label="ความกว้างของสินค้า"
            required
          ></v-text-field
        ></v-col>
         <v-col cols="3"
          ><v-text-field
            v-model="long"
            :rules="longRules"
            :counter="10"
            label="ความยาวของสินค้า"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="high"
            :rules="highRules"
            :counter="10"
            label="ความสูงของสินค้า"
            required
          ></v-text-field
        ></v-col>
       
        <v-col cols="3"
          ><v-text-field
            v-model="coin1"
            :rules="coin1Rules"
            :counter="10"
            label="ราคาทุน"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="coin2"
            :rules="coin2Rules"
            :counter="10"
            label="ราคาขาย"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="input"
            :rules="inputRules"
            :counter="10"
            label="วัน/เดือน/ปี ที่รับเข้า"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="d_o"
            :rules="d_oRules"
            :counter="10"
            label="วัน/เดือน/ปี ที่ผลิต"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="output"
            :rules="outputRules"
            :counter="10"
            label="วัน/เดือน/ปี ที่ขาย"
            required
          ></v-text-field
        ></v-col>
        <v-col>
        <v-select
        v-model="select"
        :items="type"
        :rules="[v => !!v || 'กรุณาเลือกประเภทสินค้า']"
        label="ประเภทสินค้า"
        required
        ></v-select>
        </v-col>
        </v-row>
      
      <v-checkbox
        v-model="checkbox"
        :rules="checkboxRules"
        label="ตรวจสอบแล้ว"
        required
      ></v-checkbox>
      
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        เพิ่มสินค้า
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        เคลียร์
      </v-btn>

      <v-row>
        <v-col cols="12">
          <!-- ตารางแสดงข้อมูล -->
          <v-card>
            <v-card-title>
              ข้อมูลสินค้า
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      เคลียร์การตรวจสอบ
    </v-btn> -->
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name_p: "",
    name_pRules: [
      v => !!v || "กรุณากรอกชื่อสินค้า",
      v => (v && v.length <= 30) || "ชื่อต้องมีขนาดไม่เกิน 30 ตัวอักษร"
    ],
    n: "",
    nRules: [
      v => !!v || "กรุณากรอกจำนวนสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    coin1: "",
    coin1Rules: [
      v => !!v || "กรุณากรอกราคาทุน",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    coin2: "",
    coin2Rules: [
      v => !!v || "กรุณากรอกราคาขาย",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    no_p: "",
    no_pRules: [
      v => !!v || "กรุณากรอกรหัสสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    brand: "",
    brandRules: [
      v => !!v || "กรุณากรอกยี่ห้อสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    model: "",
    modelRules: [
      v => !!v || "กรุณากรอกรุ่นสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    weight: "",
    weightRules: [
      v => !!v || "กรุณากรอกจำนวนน้ำหนัก",
      v => (v && v.length <= 10) || "ต้องมีความยาวตัวอักษรไม่เกิน 10 หลัก"
    ],
    wide: "",
    wideRules: [
      v => !!v || "กรุณากรอกความกว้างของสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวตัวอักษรไม่เกิน 10 หลัก"
    ],
    long: "",
    longRules: [
      v => !!v || "กรุณากรอกความยาวของสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวตัวอักษรไม่เกิน 10 หลัก"
    ],
    high: "",
    highRules: [
      v => !!v || "กรุณากรอกความสูงของสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวตัวอักษรไม่เกิน 10 หลัก"
    ],
    input: "",
    inputRules: [
      v => !!v || "กรุณากรอกวันเดือนปีที่รับเข้าสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวตัวอักษรไม่เกิน 10 หลัก"
    ],
    d_o: "",
    d_oRules: [
      v => !!v || "กรุณากรอกวันเดือนปีที่ผลิตสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวตัวอักษรไม่เกิน 10 หลัก"
    ],
    output: "",
    outputRules: [
      v => !!v || "กรุณากรอกวันเดือนปีที่ขายสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวตัวอักษรไม่เกิน 10 หลัก"
    ],

    checkboxRules: [v => !!v || "คุณต้องตรวจสอบสินค้าก่อน"],
    select: null,
      items: ['Item 1', 'Item 2','Item 3', 'Item 4',],
      type: ["เครื่องใช้ไฟฟ้า","เสื้อผ้าเด็ก","เครื่องเขียน","รองเท้า"],
      // checkbox: false,
    search: "",
    headers: [ 
      {text:"รหัสสินค้า",value:"no_p"},
      { text: "ชื่อสินค้า", value: "name_p"},
      { text: "ยี่ห้อสินค้า", value: "brand" },
      { text: "รุ่นสินค้า", value: "model" },
      { text: "จำนวนสินค้า", value: "n" },
      { text: "ราคาทุน", value: "coin1" },
      { text: "ราคาขาย", value: "coin2" },
      { text: "จำนวนน้ำหนัก", value: "weight"},
      { text: "ความกว้างของสินค้า", value: "wide"},
      { text: "ความยาวของสินค้า", value: "long"},
      { text: "วัน/เดือน/ปี ที่รับเข้าสินค้า", value: "input"},
      { text: "วัน/เดือน/ปี ที่ผลิตสินค้า", value: "d_o"},
      { text: "วัน/เดือน/ปี ที่ขายสินค้า", value: "output"},
      { text: "ประเภทสินค้า", value: "type"},
    ],
    desserts: []
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.desserts.push({
            name_p:`${this.name_p}`,
            no_p:`${this.no_p}`,
            n:`${this.n}`,
            coin1:`${this.coin1}`,
            coin2:`${this.coin2}`,
            brand:`${this.brand}`,
            model:`${this.model}`,
            weight:`${this.weight}`,
            wide:`${this.wide}`,
            long:`${this.long}`,
            input:`${this.input}`,
            d_o:`${this.d_o}`,
            output:`${this.output}`,
            type:`${this.select}`,
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>