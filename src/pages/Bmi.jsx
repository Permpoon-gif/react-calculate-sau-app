import React, { useState } from 'react'
import bmiImg from './../assets/bmi.png'

export default function Bmi() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmiResult, setBmiResult] = useState('0.00')

  // ฟังก์ชันคำนวณ BMI = น้ำหนัก (kg) / ส่วนสูง (m)^2
  const handleCalculate = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height)

    if (w > 0 && h > 0) {
      const heightInMeters = h / 100
      const bmi = w / (heightInMeters * heightInMeters)
      setBmiResult(bmi.toFixed(2))
    } else {
      alert('กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง')
    }
  }

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = () => {
    setWeight('')
    setHeight('')
    setBmiResult('0.00')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-kanit">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl flex flex-col items-center">
        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-gray-800">BMI Calculator</h1>
        <p className="text-sm text-gray-500 mb-4">คำนวณ BMI</p>

        {/* รูปไอคอน BMI */}
        <img src={bmiImg} alt="BMI Icon" className="w-20 h-20 mb-6 object-contain" />

        {/* ฟอร์มกรอกข้อมูล */}
        <div className="w-full space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              placeholder="เช่น 65"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              placeholder="เช่น 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ปุ่มคำนวณ */}
          <button
            onClick={handleCalculate}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition duration-200"
          >
            คำนวณ BMI
          </button>

          {/* ปุ่มรีเซ็ต */}
          <button
            onClick={handleReset}
            className="w-full py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium text-sm rounded-lg transition duration-200"
          >
            รีเซ็ต
          </button>
        </div>

        {/* แสดงผลลัพธ์ */}
        <div className="mt-5 text-center text-sm font-bold text-gray-800">
          ค่า BMI ที่คำนวณได้: <span className="text-blue-600 font-bold">{bmiResult}</span>
        </div>

        {/* ปุ่มกลับหน้าหลัก */}
        <a
          href="/"
          className="w-full mt-4 py-2.5 text-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium text-sm rounded-lg transition duration-200 block"
        >
          กลับหน้าหลัก
        </a>
      </div>
    </div>
  )
}