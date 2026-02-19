import Link from "next/link"

export function CtaSection() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary-foreground/60">
          Join MAISON
        </p>
        <h2 className="max-w-2xl font-serif text-3xl font-light tracking-tight text-primary-foreground md:text-5xl md:leading-tight">
          당신만의 스타일을
          <br />
          <span className="italic">MAISON과 함께 완성하세요</span>
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70">
          뉴스레터에 구독하시면 신규 컬렉션 소식, 특별 프로모션, 그리고
          스타일링 팁을 가장 먼저 받아보실 수 있습니다.
        </p>
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50 focus:outline-none"
          />
          <Link
            href="#"
            className="rounded-sm bg-primary-foreground px-6 py-3 text-center text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-90"
          >
            구독하기
          </Link>
        </div>
      </div>
    </section>
  )
}
