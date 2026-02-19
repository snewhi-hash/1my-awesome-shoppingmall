import Link from "next/link"

const footerLinks = {
  brand: [
    { label: "브랜드 소개", href: "#about" },
    { label: "핵심 가치", href: "#values" },
    { label: "팀 소개", href: "#team" },
    { label: "채용 정보", href: "#" },
  ],
  shopping: [
    { label: "전체 컬렉션", href: "#collection" },
    { label: "신상품", href: "#" },
    { label: "베스트셀러", href: "#" },
    { label: "세일", href: "#" },
  ],
  support: [
    { label: "문의하기", href: "#contact" },
    { label: "배송 안내", href: "#" },
    { label: "교환 및 반품", href: "#" },
    { label: "사이즈 가이드", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-wider text-card-foreground"
            >
              MAISON
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              시대를 초월한 아름다움과 현대적 감각의 조화를 추구하는 프리미엄
              패션 브랜드.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
              브랜드
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.brand.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
              쇼핑
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.shopping.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
              고객 지원
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2026 MAISON. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              개인정보처리방침
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              이용약관
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              사업자 정보
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
