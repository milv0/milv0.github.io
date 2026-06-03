"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const translations = {
  en: {
    hero: { greeting: "Hi, I'm", name: "Mingyu", tagline: "Cloud Engineer & Developer" },
    about: {
      title: "About Me",
      description: "Cloud Support Engineer at AWS with expertise in Security and Big Data. I build tools that make workflows faster and simpler. Passionate about cloud architecture, AI/ML, and clean software design.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Amazon Web Services (AWS)",
          type: "Full-time · 1 yr 4 mos",
          roles: [
            { title: "Cloud Support Associate (Big Data)", period: "Mar 2026 – Present", duration: "4 mos" },
            { title: "Cloud Support Associate (Security)", period: "Mar 2025 – Mar 2026", duration: "1 yr 1 mo" },
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Kyonggi University",
          degree: "Student Researcher, Computer Engineering",
          period: "Jun 2023 – Feb 2025",
          detail: "SIOT Lab",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        { name: "AWS Certified Security – Specialty", issued: "Dec 2025", expires: "Dec 2028", badge: "https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png" },
        { name: "AWS Certified AI Practitioner", issued: "Mar 2025", expires: "Mar 2028", badge: "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png" },
        { name: "AWS Certified Solutions Architect – Associate", issued: "Dec 2023", expires: "Dec 2026", badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" },
        { name: "AWS Certified Developer – Associate", issued: "Feb 2024", expires: "Feb 2027", badge: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" },
        { name: "AWS Certified Cloud Practitioner", issued: "Jan 2022", expires: "Feb 2027", badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "QuickAccess",
          description: "macOS menubar app — launch websites in Chrome app mode with custom window sizing.",
          tech: ["Swift", "macOS", "AppleScript"],
          link: "https://github.com/milv0/QuickAccess",
          period: "Jun 2026",
          old: false,
        },
        {
          name: "Natural Language Data Preprocessing",
          description: "Raw textile data preprocessing for Korea Textile Development Institute. Project leader for data preprocessing pipeline, preparing data for language model training.",
          tech: ["NLP", "Python", "Data Engineering"],
          link: "",
          period: "Jul 2024 – Present",
          old: true,
        },
        {
          name: "Semiconductor Ball Detection (X-RAY)",
          description: "AI model detecting normal/defective semiconductor components within 1.2s from X-ray images. Developed hybrid model combining YOLO8 Segmentation + Detection. Achieved 100% defect detection rate, 99.29% normal detection rate. Processing speed: 0.3–0.5s per image on RTX 4090.",
          tech: ["YOLO 8", "Computer Vision", "Python", "Linux", "Roboflow"],
          link: "",
          period: "Feb – Aug 2024",
          old: true,
        },
        {
          name: "Psychological Counseling Chatbot",
          description: "Emotion classification chatbot for depression patients. Fine-tuned KoELECTRA model classifying 300+ emotional situations with 90%+ accuracy. Deployed on AWS EC2, integrated Slack monitoring, MusicGen for emotion-based BGM. Won Grand Prize at 2024 Capstone Design Competition.",
          tech: ["Python", "KoELECTRA", "AWS EC2", "Flask", "Slack API"],
          link: "",
          period: "Feb – Jun 2024",
          old: true,
        },
        {
          name: "AWS Serverless Review App",
          description: "Full-stack serverless web app built during K-Software BootCamp. Implemented backend with Lambda, API Gateway, DynamoDB. Frontend with React, hosted on S3. Automated notifications via Slack API.",
          tech: ["AWS Lambda", "API Gateway", "DynamoDB", "React", "S3"],
          link: "",
          period: "Jun – Sep 2023",
          old: true,
        },
        {
          name: "AWS GenAI Chatbot",
          description: "Conversational AI chatbot using AWS Bedrock Claude model. Implemented document processing and chat functionality with Streamlit web interface.",
          tech: ["AWS Bedrock", "Claude", "Streamlit", "Python"],
          link: "",
          period: "2024",
          old: true,
        },
      ],
    },
    skills: {
      title: "Skills",
      items: ["AWS", "Python"],
    },
    contact: {
      title: "Contact",
      email: "uqwe00@gmail.com",
      cta: "Get in touch",
      linkedin: "LinkedIn",
    },
  },
  ko: {
    hero: { greeting: "안녕하세요,", name: "민규", tagline: "클라우드 엔지니어 & 개발자" },
    about: {
      title: "소개",
      description: "AWS에서 보안 및 빅데이터 분야 클라우드 서포트 엔지니어로 일하고 있습니다. 더 빠르고 단순한 워크플로우를 위한 도구를 만들며, 클라우드 아키텍처, AI/ML, 깔끔한 소프트웨어 설계를 추구합니다.",
    },
    experience: {
      title: "경력",
      items: [
        {
          company: "Amazon Web Services (AWS)",
          type: "정규직 · 1년 4개월",
          roles: [
            { title: "Cloud Support Associate (빅데이터)", period: "2026.03 – 현재", duration: "4개월" },
            { title: "Cloud Support Associate (보안)", period: "2025.03 – 2026.03", duration: "1년 1개월" },
          ],
        },
      ],
    },
    education: {
      title: "학력",
      items: [
        {
          school: "경기대학교",
          degree: "학생연구원, 컴퓨터공학",
          period: "2023.06 – 2025.02",
          detail: "SIOT 연구실",
        },
      ],
    },
    certifications: {
      title: "자격증",
      items: [
        { name: "AWS Certified Security – Specialty", issued: "2025.12", expires: "2028.12", badge: "https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png" },
        { name: "AWS Certified AI Practitioner", issued: "2025.03", expires: "2028.03", badge: "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png" },
        { name: "AWS Certified Solutions Architect – Associate", issued: "2023.12", expires: "2026.12", badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" },
        { name: "AWS Certified Developer – Associate", issued: "2024.02", expires: "2027.02", badge: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" },
        { name: "AWS Certified Cloud Practitioner", issued: "2022.01", expires: "2027.02", badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" },
      ],
    },
    projects: {
      title: "프로젝트",
      items: [
        {
          name: "QuickAccess",
          description: "macOS 메뉴바 앱 — Chrome 앱 모드로 커스텀 창 크기의 웹사이트를 빠르게 실행합니다.",
          tech: ["Swift", "macOS", "AppleScript"],
          link: "https://github.com/milv0/QuickAccess",
          period: "2026.06",
          old: false,
        },
        {
          name: "자연어 데이터 전처리",
          description: "한국섬유개발원 원시 데이터 전처리 프로젝트 리더. 전처리된 데이터로 언어 모델 학습 예정.",
          tech: ["NLP", "Python", "데이터 엔지니어링"],
          link: "",
          period: "2024.07 – 진행중",
          old: true,
        },
        {
          name: "반도체 부품 볼 탐지 (X-RAY)",
          description: "X-ray 이미지에서 정상/불량 1.2초 내 탐지 AI 모델 개발. YOLO8 Segmentation + Detection 하이브리드 모델. 불량 100% 탐지, 정상 99.29% 탐지. RTX 4090 환경 처리 속도 0.3~0.5초.",
          tech: ["YOLO 8", "Computer Vision", "Python", "Linux", "Roboflow"],
          link: "",
          period: "2024.02 – 2024.08",
          old: true,
        },
        {
          name: "심리상담 챗봇",
          description: "우울증 환자 감정 관리를 위한 상담형 챗봇. KoELECTRA 모델로 300가지 이상 감정 상황 90%+ 정확도 분류. AWS EC2 배포, Slack 모니터링, MusicGen 감정 기반 BGM 생성. 2024 캡스톤 디자인 대회 대상 수상.",
          tech: ["Python", "KoELECTRA", "AWS EC2", "Flask", "Slack API"],
          link: "",
          period: "2024.02 – 2024.06",
          old: true,
        },
        {
          name: "AWS 서버리스 리뷰 앱",
          description: "K-Software BootCamp 풀스택 서버리스 웹 앱. Lambda, API Gateway, DynamoDB로 백엔드 구현. React 프론트엔드, S3 호스팅. Slack API 알림 자동화.",
          tech: ["AWS Lambda", "API Gateway", "DynamoDB", "React", "S3"],
          link: "",
          period: "2023.06 – 2023.09",
          old: true,
        },
        {
          name: "AWS GenAI 챗봇",
          description: "AWS Bedrock Claude 모델 활용 대화형 AI 챗봇. 문서 처리 및 챗 기능을 Streamlit 웹 인터페이스로 구현.",
          tech: ["AWS Bedrock", "Claude", "Streamlit", "Python"],
          link: "",
          period: "2024",
          old: true,
        },
      ],
    },
    skills: {
      title: "기술 스택",
      items: ["AWS", "Python"],
    },
    contact: {
      title: "연락처",
      email: "uqwe00@gmail.com",
      cta: "연락하기",
      linkedin: "LinkedIn",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "ko">("en");
  const [showOlder, setShowOlder] = useState(false);
  const t = translations[lang];

  return (
    <main key={lang} className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg">{t.hero.name}</span>
          <button
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            className="px-3 py-1 rounded-full text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {lang === "en" ? "한국어" : "English"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
          <motion.p variants={fadeUp} className="text-lg text-gray-500 mb-2">
            {t.hero.greeting}
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-bold mb-4">
            {t.hero.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-500">
            {t.hero.tagline}
          </motion.p>
        </motion.div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-8">{t.about.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed">{t.about.description}</motion.p>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-12">{t.experience.title}</motion.h2>
          {t.experience.items.map((exp) => (
            <motion.div key={exp.company} variants={fadeUp} className="mb-8">
              <div className="flex items-center gap-3 mb-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-500">{exp.type}</p>
                </div>
              </div>
              {exp.roles.map((role) => (
                <div key={role.title} className="ml-13 mb-3 pl-4 border-l-2 border-gray-200 mt-3">
                  <p className="font-medium">{role.title}</p>
                  <p className="text-sm text-gray-500">{role.period} · {role.duration}</p>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education */}
      <section className="py-24 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-12">{t.education.title}</motion.h2>
          {t.education.items.map((edu) => (
            <motion.div key={edu.school} variants={fadeUp}>
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.period} · {edu.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-12">{t.certifications.title}</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.certifications.items.map((cert) => (
              <motion.div key={cert.name} variants={fadeUp} className="p-4 bg-white rounded-xl border border-gray-200 flex flex-col items-center text-center">
                {cert.badge && (
                  <img src={cert.badge} alt={cert.name} className="w-14 h-14 object-contain mb-2" />
                )}
                <p className="font-medium text-xs leading-tight">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-12">{t.projects.title}</motion.h2>
          <div className="relative border-l-2 border-gray-200 ml-4">
            {t.projects.items.filter((p) => !p.old).map((project) => (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className="mb-10 ml-8 relative"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-900 border-2 border-white" />
                {project.period && <p className="text-xs text-gray-400 mb-1">{project.period}</p>}
                <div className={`p-5 rounded-xl border transition-shadow ${project.link ? "bg-white border-gray-200 hover:shadow-lg" : "bg-gray-50 border-gray-100"}`}>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold">{project.name}</h3>
                        <span className="text-gray-400 text-sm">↗</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">{t}</span>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">{t}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Toggle for older projects */}
            <div className="ml-8 mb-6">
              <button
                onClick={() => setShowOlder(!showOlder)}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
              >
                <span className={`transition-transform ${showOlder ? "rotate-90" : ""}`}>▶</span>
                {lang === "en"
                  ? `${showOlder ? "Hide" : "Show"} earlier projects (before 2025)`
                  : `${showOlder ? "숨기기" : "보기"}: 2025년 이전 프로젝트`}
              </button>
            </div>

            {showOlder && t.projects.items.filter((p) => p.old).map((project) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 ml-8 relative"
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-300 border-2 border-white" />
                {project.period && <p className="text-xs text-gray-400 mb-1">{project.period}</p>}
                <div className={`p-5 rounded-xl border transition-shadow ${project.link ? "bg-white border-gray-200 hover:shadow-lg" : "bg-gray-50 border-gray-100"}`}>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold">{project.name}</h3>
                        <span className="text-gray-400 text-sm">↗</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">{t}</span>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">{t}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-8">{t.skills.title}</motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {t.skills.items.map((skill) => (
              <motion.span key={skill} whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-white transition-colors">
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">{t.contact.title}</motion.h2>
          <motion.div variants={fadeUp} className="flex justify-center gap-4 mt-6">
            <a href={`mailto:${t.contact.email}`} className="px-8 py-3 bg-[#ea580c] text-white rounded-full font-medium hover:bg-[#c2410c] transition-colors">
              {t.contact.cta}
            </a>
            <a href="https://www.linkedin.com/in/mingyu-park-97a208282" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
              {t.contact.linkedin}
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 text-gray-500">{t.contact.email}</motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
        <p>© 2026 Mingyu. All rights reserved.</p>
        <p className="mt-3"><span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ea580c] align-middle mr-1"></span><span className="text-[0.65rem] font-mono text-gray-400">#ea580c</span></p>
      </footer>
    </main>
  );
}
