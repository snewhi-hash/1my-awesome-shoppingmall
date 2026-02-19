import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "주소",
    value: "서울특별시 강남구 도산대로 128, 3층",
  },
  {
    icon: Phone,
    label: "전화",
    value: "02-1234-5678",
  },
  {
    icon: Mail,
    label: "이메일",
    value: "hello@maison.kr",
  },
  {
    icon: Clock,
    label: "영업시간",
    value: "월~토 11:00 - 20:00 / 일 12:00 - 18:00",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Info */}
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-accent">
              Contact Us
            </p>
            <h2 className="max-w-md font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
              언제든
              <br />
              <span className="italic">문의해 주세요</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              상품 관련 문의, 맞춤 스타일링 상담, 또는 협업 제안까지 편하게
              연락해 주세요. 48시간 이내에 답변 드리겠습니다.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-secondary">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider text-muted-foreground uppercase">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-sm border border-border bg-card p-8 lg:p-10">
            <h3 className="font-serif text-xl font-medium text-card-foreground">
              문의 양식
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              아래 양식을 작성해 주시면 빠르게 답변 드리겠습니다.
            </p>

            <form className="mt-8 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs tracking-wider text-muted-foreground uppercase"
                  >
                    이름
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="홍길동"
                    className="rounded-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs tracking-wider text-muted-foreground uppercase"
                  >
                    이메일
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="rounded-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs tracking-wider text-muted-foreground uppercase"
                >
                  제목
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="문의 내용의 제목을 입력하세요"
                  className="rounded-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs tracking-wider text-muted-foreground uppercase"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="문의하실 내용을 자세히 적어주세요"
                  className="resize-none rounded-sm border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-sm bg-primary px-6 py-3 text-sm font-medium tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                문의 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
