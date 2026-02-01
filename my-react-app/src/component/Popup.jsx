export default function Popup({ message ,status , onClick}) {

return( 

<div onClick={onClick} className="fixed inset-0 bg-[#1a0f2e]/70  flex items-center justify-center z-50 backdrop-blur-md">
  <div   onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-lg w-[90%]
    max-w-md flex items-center justify-center" >
    <p className={`${status === "success" ? "text-green-500" : "text-red-500"}  text-center text-xl sm:text-2xl md:text-3xl`}>{message}</p>
  </div>
</div>





    
)








}