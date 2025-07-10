"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  Users,
  Award,
  ChevronRight,
} from "lucide-react"

export default function AIPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      category: "AI/머신러닝",
      items: [
        {
          title: "실시간 감정 분석 챗봇",
          description:
            "자연어 처리와 감정 분석을 결합한 고급 챗봇 시스템. GPT-4와 커스텀 감정 분석 모델을 통합하여 사용자의 감정 상태를 실시간으로 파악하고 맞춤형 응답을 제공합니다.",
          tech: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "React"],
          metrics: "95% 감정 인식 정확도, 월 10만+ 사용자",
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "컴퓨터 비전 기반 품질 검사 시스템",
          description:
            "제조업체를 위한 AI 기반 자동 품질 검사 솔루션. CNN과 YOLO를 활용하여 제품 결함을 실시간으로 감지하고 분류합니다.",
          tech: ["PyTorch", "OpenCV", "Docker", "Kubernetes", "PostgreSQL"],
          metrics: "99.2% 결함 감지율, 검사 시간 80% 단축",
          icon: <Zap className="w-6 h-6" />,
        },
      ],
    },
    {
      category: "풀스택 웹 애플리케이션",
      items: [
        {
          title: "글로벌 전자상거래 플랫폼",
          description:
            "마이크로서비스 아키텍처 기반의 대규모 전자상거래 플랫폼. 실시간 재고 관리, 다중 결제 시스템, AI 추천 엔진을 통합한 종합 솔루션입니다.",
          tech: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS", "Stripe"],
          metrics: "일일 10만+ 거래, 99.9% 가동률",
          icon: <Globe className="w-6 h-6" />,
        },
        {
          title: "협업 프로젝트 관리 도구",
          description:
            "팀 협업을 위한 실시간 프로젝트 관리 플랫폼. WebSocket을 활용한 실시간 업데이트, 칸반 보드, 시간 추적, 보고서 생성 기능을 제공합니다.",
          tech: ["React", "Express.js", "Socket.io", "MySQL", "Docker"],
          metrics: "500+ 기업 도입, 평균 생산성 40% 향상",
          icon: <Users className="w-6 h-6" />,
        },
      ],
    },
    {
      category: "모바일 애플리케이션",
      items: [
        {
          title: "AI 헬스케어 모니터링 앱",
          description:
            "웨어러블 기기와 연동되는 개인 건강 관리 앱. 머신러닝을 활용한 건강 패턴 분석과 개인화된 건강 조언을 제공합니다.",
          tech: ["React Native", "TensorFlow Lite", "Firebase", "HealthKit"],
          metrics: "50만+ 다운로드, 4.8/5.0 평점",
          icon: <Smartphone className="w-6 h-6" />,
        },
      ],
    },
    {
      category: "데이터 엔지니어링",
      items: [
        {
          title: "실시간 빅데이터 분석 파이프라인",
          description:
            "대용량 데이터 처리를 위한 실시간 ETL 파이프라인. Apache Kafka와 Spark를 활용하여 초당 수만 건의 데이터를 처리하고 분석합니다.",
          tech: ["Apache Kafka", "Spark", "Elasticsearch", "Kibana", "Python"],
          metrics: "초당 50,000+ 이벤트 처리, 지연시간 < 100ms",
          icon: <Database className="w-6 h-6" />,
        },
      ],
    },
  ]

  const skills = [
    { category: "AI/ML", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face"] },
    { category: "프론트엔드", items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "React Native"] },
    { category: "백엔드", items: ["Node.js", "Express", "FastAPI", "Django", "GraphQL", "REST API"] },
    { category: "데이터베이스", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL"] },
    { category: "클라우드/DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  김민수
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  소개
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  프로젝트
                </a>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  기술 스택
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  연락처
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                소개
              </a>
              <a href="#projects" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                프로젝트
              </a>
              <a href="#skills" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                기술 스택
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                연락처
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  글로벌 테크 엔지니어
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  AI와 풀스택의
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    완벽한 융합
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  5년간의 글로벌 테크 기업 경험을 바탕으로 AI/ML과 풀스택 개발을 전문으로 하는 엔지니어입니다. 혁신적인
                  솔루션으로 비즈니스 가치를 창출하고, 사용자 경험을 혁신하는 것이 저의 전문 분야입니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    프로젝트 보기
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    이력서 다운로드
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">완료 프로젝트</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5년</div>
                  <div className="text-sm text-gray-600">개발 경험</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100만+</div>
                  <div className="text-sm text-gray-600">서비스 사용자</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">현재 프로젝트: AI 추천 시스템 개발</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">위치: 서울, 대한민국 (원격 근무 가능)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">전문 분야: AI/ML, 풀스택 개발</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">주요 프로젝트</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI/ML부터 풀스택 웹 애플리케이션까지, 다양한 도메인에서의 혁신적인 솔루션을 소개합니다.
            </p>
          </div>

          {projects.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Code className="w-6 h-6 mr-3 text-blue-600" />
                {category.category}
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.items.map((project, projectIndex) => (
                  <Card
                    key={projectIndex}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{project.icon}</div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                              {project.title}
                            </CardTitle>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4 leading-relaxed">
                        {project.description}
                      </CardDescription>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-sm font-medium text-green-800">주요 성과</div>
                        <div className="text-sm text-green-700">{project.metrics}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">기술 스택</h2>
            <p className="text-xl text-gray-600">최신 기술과 검증된 도구들을 활용한 전문적인 개발 역량</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-sm py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">함께 혁신을 만들어가요</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            새로운 도전과 기회를 찾고 있습니다. 글로벌 테크 기업에서 함께 성장할 수 있는 기회를 기대합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="w-5 h-5 mr-2" />
              이메일 보내기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn 연결
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-500">
            <p className="text-blue-100 text-sm">© 2024 김민수. 모든 권리 보유. | 서울, 대한민국 | 원격 근무 가능</p>
          </div>
        </div>
      </section>
    </div>
  )
}
