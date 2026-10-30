
export default function CardMenu({ imgShow, titleShow, stitleShow }) {
  return (
    <div className="w-280px h-250px border-2 border-gray-200
                    p-5 rounded-2xl shadow-lg bg-white
                    flex flex-col items-center">

      {/* รูปภาพ */}
      <img
        src={imgShow}
        alt={titleShow}
        className="w-120px h-100px object-contain"
      />

      {/* หัวข้อ */}
      <p className="mt-3 font-kanit text-base font-bold text-center
                    h-28px flex items-center justify-center">
        {titleShow}
      </p>

      {/* คำอธิบาย */}
      <p className="mt-2 font-charm text-sm text-gray-500 text-center">
        {stitleShow}
      </p>

    </div>
  )
}