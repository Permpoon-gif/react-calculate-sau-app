import React, { useState } from 'react'

import bmrImg from './../assets/bmr.png'

export default function Bmr() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [bmrResult, setBmrResult] = useState('0.00')

  // ฟังก์ชันคำนวณ BMR ตามเพศ
  const handleCalculate = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height)
    const a = parseFloat(age)

    if (w > 0 && h > 0 && a > 0) {
      let bmr = 0
      if (gender === 'male') {
        // ผู้ชาย : BMR = 66 + (13.7 x น้ำหนัก) + (5 x ส่วนสูง) - (6.8 x อายุ)
        bmr = 66 + (13.7 * w) + (5 * h) - (6.8 * a)
      } else {
        // ผู้หญิง : BMR = 665 + (9.6 x น้ำหนัก) + (1.8 x ส่วนสูง) - (4.7 x อายุ)
        bmr = 665 + (9.6 * w) + (1.8 * h) - (4.7 * a)
      }
      setBmrResult(bmr.toFixed(2))
    } else {
      alert('กรุณากรอกข้อมูลน้ำหนัก ส่วนสูง และอายุให้ครบถ้วน')
    }
  }

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = () => {
    setWeight('')
    setHeight('')
    setAge('')
    setGender('male')
    setBmrResult('0.00')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-kanit">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl flex flex-col items-center">
        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-gray-800">BMR Calculator</h1>
        <p className="text-sm text-gray-500 mb-4">คำนวณ BMR</p>

        {/* รูปไอคอน BMR */}
        <img src={bmrImg} alt="BMR Icon" className="w-24 h-24 mb-6 object-contain" />

        {/* ฟอร์มกรอกข้อมูล */}
        <div className="w-full space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              placeholder=""
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
              placeholder=""
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ป้อนอายุ (ปี)
            </label>
            <input
              type="number"
              placeholder=""
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* เลือกเพศ */}
          <div>
            <span className="block text-xs font-semibold text-gray-700 mb-1">เพศ:</span>
            <div className="space-y-1">
              <label className="flex items-center text-xs text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                ชาย
              </label>
              <label className="flex items-center text-xs text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                หญิง
              </label>
            </div>
          </div>

          {/* ปุ่มคำนวณ และ ปุ่มรีเซ็ต */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleCalculate}
              className="w-1/2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg transition duration-200"
            >
              คำนวณ BMR
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-1/2 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded-lg transition duration-200"
            >
              รีเซ็ต
            </button>
          </div>
        </div>

        {/* แสดงผลลัพธ์ */}
        <div className="mt-5 text-center text-sm font-bold text-gray-800">
          ค่า BMR ที่คำนวณได้: <span className="text-blue-600 font-bold">{bmrResult}</span>
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
