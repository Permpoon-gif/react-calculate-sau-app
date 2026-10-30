import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import carImg from './../assets/car.png'

export default function Car() {
  const [customerName, setCustomerName] = useState('')
  const [carPrice, setCarPrice] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [downPaymentPercent, setDownPaymentPercent] = useState('15')
  const [installmentMonths, setInstallmentMonths] = useState('24')
  const [monthlyPayment, setMonthlyPayment] = useState('0.00')

  // คำนวณค่างวดรถ
  const handleCalculate = () => {
    const price = parseFloat(carPrice)
    const rate = parseFloat(interestRate)
    const downPercent = parseFloat(downPaymentPercent)
    const months = parseInt(installmentMonths, 10)

    if (price > 0 && !isNaN(rate) && rate >= 0 && months > 0) {
      // 1. เงินดาวน์ และ ยอดจัดไฟแนนซ์: ราคารถ - เงินดาวน์
      const downAmount = price * (downPercent / 100)
      const financeAmount = price - downAmount

      // 2. จำนวนปีที่ผ่อน = จำนวนเดือน / 12
      const years = months / 12

      // 3. ดอกเบี้ย: ยอดจัดไฟแนนซ์ x อัตราดอกเบี้ยรายปี x จำนวนปีที่ผ่อน
      const totalInterest = financeAmount * (rate / 100) * years

      // 4. ยอดรวมทั้งหมดที่ต้องผ่อน: ยอดจัดไฟแนนซ์ + ดอกเบี้ยทั้งหมด
      const totalAmount = financeAmount + totalInterest

      // 5. ค่างวดต่อเดือน: ยอดรวมทั้งหมดที่ต้องผ่อน / จำนวนเดือนที่ผ่อน
      const paymentPerMonth = totalAmount / months

      // จัดรูปแบบตัวเลขให้มีคอมม่าและทศนิยม 2 ตำแหน่ง
      setMonthlyPayment(
        paymentPerMonth.toLocaleString('th-TH', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      )
    } else {
      alert('กรุณากรอกราคารถและอัตราดอกเบี้ยให้ถูกต้อง')
    }
  }

  // ล้างข้อมูลฟอร์ม
  const handleReset = () => {
    setCustomerName('')
    setCarPrice('')
    setInterestRate('')
    setDownPaymentPercent('15')
    setInstallmentMonths('24')
    setMonthlyPayment('0.00')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-kanit">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl flex flex-col items-center">
        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-gray-800">Car Installment Calculator</h1>
        <p className="text-sm text-gray-500 mb-4">คำนวณ Car Installment</p>

        {/* รูปไอคอนรถ */}
        <img src={carImg} alt="Car Icon" className="w-28 h-28 mb-4 object-contain" />

        {/* ฟอร์มกรอกข้อมูล */}
        <div className="w-full space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ชื่อผู้คำนวณ
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ราคารถ (บาท)
            </label>
            <input
              type="number"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* เลือกเงินดาวน์ (%) */}
          <div>
            <span className="block text-xs font-semibold text-gray-700 mb-1">
              เงินดาวน์ (%)
            </span>
            <div className="flex items-center gap-4 text-xs text-gray-700">
              {['15', '20', '25', '30', '35'].map((percent) => (
                <label key={percent} className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="downPayment"
                    value={percent}
                    checked={downPaymentPercent === percent}
                    onChange={(e) => setDownPaymentPercent(e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  {percent}%
                </label>
              ))}
            </div>
          </div>

          {/* จำนวนเดือนที่ผ่อน (Dropdown) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              value={installmentMonths}
              onChange={(e) => setInstallmentMonths(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          {/* ปุ่มคำนวณ และ ล้างข้อมูล */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={handleCalculate}
              className="w-1/2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition duration-200"
            >
              คำนวณ
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-1/2 py-2.5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium text-sm rounded-lg transition duration-200"
            >
              ล้างข้อมูล
            </button>
          </div>
        </div>

        {/* แสดงผลลัพธ์ */}
        <div className="mt-5 text-center text-sm font-bold text-gray-800">
          ผ่อนชำระต่อเดือน: <span className="text-blue-600 font-bold">{monthlyPayment}</span> บาท
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