import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <section
      id="Testimonials"
      className="w-full flex flex-col pt-[100px] gap-[30px]"
    >
      <div className="flex flex-col gap-[6px] items-center">
        <h2 className="font-bold text-[32px] leading-[48px] text-center">
          Best Selective
        </h2>
        <p className="font-medium text-flysha-off-purple">
          We gave them all the best experiences ever
        </p>
      </div>
      <div className="testimonial-slider w-full overflow-hidden">
        <div className="slider flex shrink-0 w-max">
          <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  alt="star"
                  className="w-5 h-5"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  alt="star"
                  className="w-5 h-5"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  alt="star"
                  className="w-5 h-5"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  alt="star"
                  className="w-5 h-5"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  alt="star"
                  className="w-5 h-5"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
              <p className="review leading-[30px] h-[90px] w-[305px]">
                I thought cheaper was not good, well, I personally never had
                this amazing experience. Thank you!!
              </p>
              <div className="flex">
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
                <Image
                  width={30}
                  height={30}
                  src="/assets/images/icons/Star.svg"
                  className="w-5 h-5"
                  alt="star"
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/photos/Group 47.png"
                    className="w-full h-full object-cover"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Jessi Lyio</p>
                  <p className="text-sm text-flysha-off-purple">
                    CPO Agolia Modd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
