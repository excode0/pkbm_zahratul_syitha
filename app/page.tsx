import Image from "next/image";
import { Hero, KursusCard, Testimonial } from "@/components";
import { bg_wrap, t6 } from "@/assets/images";
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center bg-gray-100">
      <Hero />
      <div className="w-full md:w-[80%] flex flex-col md:flex-row-reverse justify-between m-10">
        <div className="w-full p-5">
          <div className="absolute bg-gray-200 rounded flex flex-col p-2">
            <span className="">Kepala Sekolah</span>
            <span className="font-[600]">RIDO AKBAR DERDA PUTRA</span>
          </div>
          <Image src={t6} alt="" className="object-cover rounded-lg" />
        </div>
        <div className="flex flex-col items-center w-full p-5">
          <span className="text-[2em] text-bold">SELAMAT DATANG</span>
          <span>
            Pendidikan Nonformal adalah jalan alternatif bagi warga yang tidak
            dapat mengikuti pendidikan di formal. Bukan hanya sebagai program
            pemberantasan wajib 9 tahun saja tetapi juga dalam pemberantasan
            buta aksara, perluasan pendidikan anak usia dini, kesetaraan,
            peningkatan keterampilan dan kecakapan hidup (lifeskill) yang mampu
            meningkatkan kesejahteraan hidup warga belajarnya. Untuk itu Kami
            PKBM Zahratul Syitha hadir di tengah masyarakat meskipun banyak
            rintangan yg dihadapi baik dari internal maupun eksternal. Itu
            bukanlah hal yg dapat menghambat perjuangan dan pengabdian dalam
            melaksanakan pemerataan pendidikan dan memberikan pelatihan
            keterampilan dan keahlian bagi masyarakat yang membutuhkan untuk
            terjun di dunia usaha dan industri.{" "}
          </span>
        </div>
      </div>
      <div className="h-[150px] flex justify-center items-center overflow-hidden">
        <Image src={bg_wrap} alt="background" />
        <div className="h-[150px] w-full bg-black opacity-40 absolute" />
        <div className="w-[80%] absolute grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 bg-black bg-opacity-50 p-2 md:p-5 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <i className="fa-solid fa-user-secret text-white text-[2em] md:text-[3em]"></i>
            <span className="text-white ">3000 ALUMNI</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i className="fa-solid fa-user-secret text-white text-[2em] md:text-[3em]"></i>
            <span className="text-white ">3000 ALUMNI</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i className="fa-solid fa-user-secret text-white text-[2em] md:text-[3em]"></i>
            <span className="text-white ">3000 ALUMNI</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i className="fa-solid fa-user-secret text-white text-[2em] md:text-[3em]"></i>
            <span className="text-white ">3000 ALUMNI</span>
          </div>
        </div>
      </div>
      <div className="w-full p-5 ">
        <div className="w-full flex justify-center items-center">
          <hr className="h-[10px] bg-[#1eb2a6] w-full m-5 rounded" />
          <span className="text-[1.2em] text-[#1eb2a6] font-[600]">
            PROGRAMS
          </span>
          <hr className="h-[10px] bg-[#1eb2a6] w-full m-5 rounded" />
        </div>
        <div className="flex justify-center items-center  mb-[20px]">
          <span className="text-black font-[600] text-[1.5em]">
            TEMUKAN BAKAT SAUDARA/I
          </span>
        </div>
        <KursusCard />
      </div>
      <div className="w-full p-5 mb-[150px] md:mb-[0px]">
        <div className="w-full flex justify-center items-center">
          <hr className="h-[10px] bg-[#1eb2a6] w-full m-5 rounded" />
          <span className="text-[1.2em] text-[#1eb2a6] font-[600]">
            TESTIMONIAL
          </span>
          <hr className="h-[10px] bg-[#1eb2a6] w-full m-5 rounded" />
        </div>
        <div className="flex justify-center items-center  mb-[20px]">
          <span className="text-black font-[600] text-[1.5em]">
            OUR SUCCESSFUL STUDENT
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
      <div className="w-full mt-[100px] bg-[#1eb2a6] grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex flex-col justify-center items-center p-5">
          <span className="text-white text-[1.5em]">KIRIM MASUKAN ANDA</span>
          <div className="hidden md:block">
            <i className="fa-solid fa-box text-[12em] text-white "></i>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <label htmlFor="email" className="block mb-2 text-white">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 "
            placeholder="Email Address"
          />

          <label htmlFor="message" className="block mt-4 mb-2 text-white">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
          ></textarea>

          <div className="w-full flex justify-end items-end">
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Kirim
          </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
