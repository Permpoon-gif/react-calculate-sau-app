import calculate from './../assets/calculate.png'
import CardMenu from './../components/CardMenu'
import bmi from './../assets/bmi.png'
import bmr from './../assets/bmr.png'
import car from './../assets/car.png'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center'>
        {/* แสดงรูป */}
        <img src={calculate} alt="calculate" className='w-30 mt-20' />

        {/* แสดงชื่อเว็ป */}
        <p className='font-kanit text-3xl font-bold mt-5'>
          เครื่องคำนวณออนไลน์
        </p>
        <p className='font-itim text-xl text-gray-700'>
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>



        {/* แสดงเมนู 3 เมนู */}
        <div className="mt-12 flex justify-center items-start gap-5 flex-wrap">

          {/* เมนู BMI */}
          <a href="/bmi" className="cursor-pointer hover:scale-105 transition duration-200">
            <CardMenu
              imgShow={bmi}
              titleShow="BMI (ดัชนีมวลกาย)"
              stitleShow="คำนวณน้ำหนักและส่วนสูงว่าเหมาะสมหรือไม่"
            />
          </a>

          {/* เมนู BMR */}
          <a href="/bmr" className="cursor-pointer hover:scale-105 transition duration-200">
            <CardMenu
              imgShow={bmr}
              titleShow="BMR (ดัชนีเผาผลาญร่างกาย)"
              stitleShow="คำนวณอัตราการเผาผลาญที่ร่างกายต้องการ"
            />
          </a>

          {/* เมนู Car */}
          <a href="/car" className="cursor-pointer hover:scale-105 transition duration-200">
            <CardMenu
              imgShow={car}
              titleShow="Car (เงินผ่อนรถรายเดือน)"
              stitleShow="คำนวณเงินผ่อนรถยนต์หรือรถจักรยานยนต์ต่อเดือน"
            />
          </a>

        </div>


      </div>
    </>
  )
}