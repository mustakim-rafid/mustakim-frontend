import Image from "next/image";

export default function SkillDevelopSection() {
  const avatars = [
    { src: "/student-1.png", alt: "Student avatar 1" },
    { src: "/student-2.png", alt: "Student avatar 2" },
    { src: "/student-3.png", alt: "Student avatar 3" },
  ];

  const smallImages = [
    { src: "/small-image-1.png", alt: "Student studying 1" },
    { src: "/small-image-2.png", alt: "Student studying 2" },
    { src: "/small-image-3.png", alt: "Student studying 3" },
  ];

  return (
    <section className="bg-black text-white overflow-hidden p-2">
      <div className="max-w-625 mx-auto flex items-stretch justify-center gap-3 lg:gap-5">
        <div className="hidden lg:block lg:w-1/3">
          <Image
            src="/man-on-laptop-large.png" 
            alt="Person concentrating intensely on a laptop"
            width={720}
            height={900}
            className="w-full h-full object-cover rounded-2xl aspect-3/4"
          />
        </div>

        <div className="w-full md:w-1/2 bg-[#0c0c0c] border border-neutral-900 rounded-2xl p-8 md:p-5 lg:p-10 flex flex-col justify-between">
          <div className="flex flex-col md:flex-row items-start md:justify-between gap-3 mb-10 md:mb-32">
            {/* Badge */}
            <div className="bg-neutral-900 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1d1d1f] text-xs mb-5 text-neutral-400 shadow-[inset_-1px_-1px_2px_rgba(22,92,255,0.3),inset_1px_1px_2px_rgba(22,92,255,0.3)]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>No worries</span>
            </div>

            {/* Avatars and Student Count */}
            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <div className="flex items-center -space-x-2.5">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="relative w-9 h-9 md:w-8 md:h-8 rounded-full overflow-hidden border-2 border-[#0c0c0c] ring-1 ring-neutral-800"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[11px] md:text-xs text-neutral-500 max-w-40">
                Join with 5K other students
              </span>
            </div>
          </div>

          {/* Text and Small Image Stack */}
          <div className="flex flex-col sm:flex-row items-start md:justify-between gap-8">
            <div className="w-full md:w-3/5 space-y-10 md:space-y-12 max-w-md md:max-w-none text-left">
              <p className="max-w-52 font-thin text-base text-neutral-400 leading-relaxed">
                The ability to concentrate deeply is the ultimate productivity
                hack
              </p>

              <h2 className="max-w-60 text-2xl lg:text-3xl font-thin text-white tracking-tight leading-tight">
                And fortunately it’s a skill you can train & develop.
              </h2>
            </div>

            {/* Small Image Stack Block */}
            <div className="flex sm:flex-col gap-2 w-full md:w-1/3 justify-start items-end">
              {smallImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-3/2 md:aspect-video w-28 h-32 max-w-40 md:max-w-none rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
