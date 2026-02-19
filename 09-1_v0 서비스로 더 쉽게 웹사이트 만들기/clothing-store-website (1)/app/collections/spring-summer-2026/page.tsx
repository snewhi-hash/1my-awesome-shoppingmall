"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// 제품 데이터
const products = [
  {
    id: 1,
    name: "실크 블렌드 블라우스",
    category: "상의",
    price: 289000,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
    color: "아이보리",
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "린넨 와이드 팬츠",
    category: "하의",
    price: 198000,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=2070&auto=format&fit=crop",
    color: "베이지",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "코튼 원피스",
    category: "원피스",
    price: 345000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2083&auto=format&fit=crop",
    color: "화이트",
    sizes: ["S", "M", "L"],
  },
  {
    id: 4,
    name: "플리츠 스커트",
    category: "하의",
    price: 235000,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=2069&auto=format&fit=crop",
    color: "크림",
    sizes: ["S", "M", "L"],
  },
  {
    id: 5,
    name: "캐시미어 니트",
    category: "상의",
    price: 425000,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005&auto=format&fit=crop",
    color: "카멜",
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "테일러드 재킷",
    category: "아우터",
    price: 589000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2036&auto=format&fit=crop",
    color: "네이비",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "플로럴 맥시 드레스",
    category: "원피스",
    price: 398000,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2046&auto=format&fit=crop",
    color: "플로럴",
    sizes: ["S", "M", "L"],
  },
  {
    id: 8,
    name: "슬림핏 슬랙스",
    category: "하의",
    price: 265000,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2069&auto=format&fit=crop",
    color: "그레이",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "레이스 탑",
    category: "상의",
    price: 178000,
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=2080&auto=format&fit=crop",
    color: "블랙",
    sizes: ["S", "M", "L"],
  },
  {
    id: 10,
    name: "트렌치 코트",
    category: "아우터",
    price: 685000,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2087&auto=format&fit=crop",
    color: "베이지",
    sizes: ["S", "M", "L"],
  },
  {
    id: 11,
    name: "시폰 블라우스",
    category: "상의",
    price: 198000,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop",
    color: "핑크",
    sizes: ["S", "M", "L"],
  },
  {
    id: 12,
    name: "미디 랩 스커트",
    category: "하의",
    price: 225000,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=2069&auto=format&fit=crop",
    color: "카키",
    sizes: ["S", "M", "L", "XL"],
  },
]

export default function SpringSummer2026Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [priceRange, setPriceRange] = useState("전체")
  const [sortBy, setSortBy] = useState("추천순")

  // 필터링 로직
  const filteredProducts = products.filter((product) => {
    // 검색어 필터
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    
    // 카테고리 필터
    const matchesCategory = selectedCategory === "전체" || product.category === selectedCategory
    
    // 가격 필터
    let matchesPrice = true
    if (priceRange === "10만원 이하") {
      matchesPrice = product.price <= 100000
    } else if (priceRange === "10-30만원") {
      matchesPrice = product.price > 100000 && product.price <= 300000
    } else if (priceRange === "30-50만원") {
      matchesPrice = product.price > 300000 && product.price <= 500000
    } else if (priceRange === "50만원 이상") {
      matchesPrice = product.price > 500000
    }
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  // 정렬 로직
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "가격 낮은순") return a.price - b.price
    if (sortBy === "가격 높은순") return b.price - a.price
    if (sortBy === "이름순") return a.name.localeCompare(b.name)
    return 0 // 추천순
  })

  return (
    <main>
      <Navigation />
      
      {/* Hero Header */}
      <section className="relative bg-secondary pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link 
            href="/#collection"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            컬렉션으로 돌아가기
          </Link>
          
          <div className="max-w-3xl">
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-accent">
              Spring / Summer 2026
            </p>
            <h1 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
              2026 봄/여름 컬렉션
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              따스한 봄빛을 담은 내추럴 톤의 우아한 라인업. 
              가벼운 소재와 부드러운 실루엣으로 완성된 시즌 필수 아이템을 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters & Search */}
          <div className="mb-10 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="제품 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[140px] bg-card border-border">
                    <SelectValue placeholder="카테고리" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="전체">전체</SelectItem>
                    <SelectItem value="상의">상의</SelectItem>
                    <SelectItem value="하의">하의</SelectItem>
                    <SelectItem value="원피스">원피스</SelectItem>
                    <SelectItem value="아우터">아우터</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-[140px] bg-card border-border">
                    <SelectValue placeholder="가격대" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="전체">전체</SelectItem>
                    <SelectItem value="10만원 이하">10만원 이하</SelectItem>
                    <SelectItem value="10-30만원">10-30만원</SelectItem>
                    <SelectItem value="30-50만원">30-50만원</SelectItem>
                    <SelectItem value="50만원 이상">50만원 이상</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] bg-card border-border">
                    <SelectValue placeholder="정렬" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="추천순">추천순</SelectItem>
                    <SelectItem value="가격 낮은순">가격 낮은순</SelectItem>
                    <SelectItem value="가격 높은순">가격 높은순</SelectItem>
                    <SelectItem value="이름순">이름순</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-muted-foreground">
                {sortedProducts.length}개의 제품
              </p>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">검색 결과가 없습니다.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedProducts.map((product) => (
                <article
                  key={product.id}
                  className="group cursor-pointer overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
                  </div>
                  
                  <div className="bg-card p-4">
                    <p className="text-xs tracking-wider text-accent uppercase">
                      {product.category}
                    </p>
                    <h3 className="mt-2 font-serif text-base font-medium text-card-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {product.color}
                    </p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="font-serif text-lg font-light text-foreground">
                        ₩{product.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product.sizes.join(", ")}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
