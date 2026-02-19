import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="MAISON 패션 브랜드 대표 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 lg:px-8">
        <p className="mb-4 text-sm tracking-[0.3em] uppercase text-primary-foreground/70">
          Since 2015
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-tight font-light tracking-tight text-primary-foreground md:text-7xl md:leading-tight">
          당신의 스타일을
          <br />
          <span className="font-normal italic">완성하는 공간</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          MAISON은 시대를 초월한 아름다움과 현대적 감각의 조화를 추구합니다.
          최고의 소재, 정교한 디테일, 그리고 당신만의 이야기를 담아냅니다.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Link
            href="#about"
            className="rounded-sm bg-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wider text-foreground transition-opacity hover:opacity-90"
          >
            브랜드 스토리
          </Link>
          <Link
            href="#collection"
            className="rounded-sm border border-primary-foreground/40 px-8 py-3.5 text-sm font-medium tracking-wider text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            컬렉션 보기
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary-foreground/60" />
      </div>
    </section>
  )
}
