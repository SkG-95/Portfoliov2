"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Sun,
  Moon,
  Code,
  Briefcase,
  User,
  Mail,
  ArrowUp,
  GraduationCap,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  ChevronLeft,
  ChevronRight,
  Folder,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const skillsData = {
  frameworks: [
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Symfony",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/symfony/symfony-original.svg",
    },
    {
      name: "Spring Boot",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
    },
    {
      name: "Angular",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    },
  ],
  devops: [
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "GitHub Actions",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
  ],
  versionControl: [
    { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    { name: "Gitea", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  ],
  os: [
    { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
    {
      name: "Windows",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/windows8/windows8-original.svg",
    },
    { name: "macOS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "phpMyAdmin",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
  ],
  methods: [{ name: "Agile" }, { name: "Merise" }],
  programmingLanguages: [
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML/CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "C/C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    },
  ],
}

const projects = [
  {
    name: "Gestionnaire de personnel",
    description:
      "Application de gestion du personnel développée en Java. Cette application permet de gérer efficacement les informations des employés, les horaires, et les performances.",
    tech: ["Java", "JavaFX", "MySQL"],
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    ],
    features: [
      "Interface utilisateur intuitive",
      "Gestion des données des employés",
      "Rapports de performance",
      "Planification des horaires",
    ],
  },
  {
    name: "Site E-Commerce",
    description:
      "Projet en cours de développement d'une plateforme e-commerce moderne et responsive. Le site offre une expérience d'achat fluide et sécurisée.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    ],
    features: [
      "Design responsive",
      "Panier d'achat dynamique",
      "Intégration de paiement sécurisé",
      "Gestion des stocks en temps réel",
    ],
  },
  {
    name: "Répertoire de Media",
    description:
      "Application web de gestion de médias permettant aux utilisateurs de cataloguer et d'organiser leurs collections de films, séries TV, livres et musique.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    images: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=600&q=80",
    ],
    features: [
      "Système de recherche avancé",
      "Intégration d'API pour les métadonnées",
      "Système de notation et de critique",
      "Recommandations personnalisées",
    ],
  },
  {
    name: "Distributeur à médicament",
    description:
      "Système de distribution automatisée de médicaments conçu pour améliorer la précision et l'efficacité dans les environnements médicaux.",
    tech: ["C", "C++", "Arduino"],
    images: [
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80",
    ],
    features: [
      "Interface utilisateur tactile",
      "Système de dosage précis",
      "Alertes et notifications",
      "Journalisation sécurisée des distributions",
    ],
  },
  {
    name: "Web Scraping",
    description:
      "Collection de scripts Python pour la collecte et l'analyse de données en ligne, utilisés dans divers projets de recherche et d'analyse de marché.",
    tech: ["Python", "BeautifulSoup", "Scrapy", "Pandas"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    ],
    features: [
      "Extraction de données structurées",
      "Analyse de sentiment",
      "Visualisation de données",
      "Automatisation des tâches de collecte",
    ],
  },
]

const projectsData = [
  { name: "Gestionnaire de personnel", description: "Application de gestion du personnel", tech: ["Java"] },
  { name: "Site E-Commerce", description: "Projet en cours de développement", tech: ["JS", "HTML", "CSS"] },
  {
    name: "Répertoire de Media",
    description: "Application de gestion de médias",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Distributeur à médicament",
    description: "Système de distribution automatisée de médicaments",
    tech: ["C", "C++"],
  },
  { name: "Web Scraping", description: "Projets de collecte de données en ligne", tech: ["Python"] },
]

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 95 },
  { name: "Java", level: 85 },
  { name: "PHP", level: 80 },
  { name: "Python", level: 85 },
  { name: "C/C++", level: 75 },
  { name: "Docker", level: 70 },
]

const experiences = [
  {
    title: "Développeur Visual Basic (Stage)",
    company: "Texas Instruments",
    period: "Avril - Juin 2021",
    description: [
      "Développement de solutions logicielles en Visual Basic pour répondre aux exigences opérationnelles.",
      "Automatisation des processus métiers à l'aide de macros avancées.",
      "Conception de scripts pour le traitement et l'analyse automatisée de données CSV.",
    ],
  },
  {
    title: "Vendeur",
    company: "Jardiland",
    period: "Avril - Juillet 2023",
    description: [
      "Coordination logistique : Participation à la réception des livraisons, au tri et au scan des palettes en équipe.",
      "Service client : Conseils personnalisés dans le domaine animalier en magasin, d'articles spécialisés, en assurant un service professionnel.",
      "Compétences commerciales : Mise en avant des produits, gestion de l'espace de vente pour optimiser la présentation et faciliter l'accès des clients.",
    ],
  },
]

const education = [
  {
    degree: "Bachelor Développeur Full Stack",
    school: "Ensitech - Campus Cergy Saint-Christophe",
    period: "Septembre 2024 - Juillet 2025",
    description: [
      "Etude de langage de programmation",
      "Maquettage d'application et configuration d'environnement de travail",
      "Gestion de projet informatique",
    ],
  },
  {
    degree: "BTS Système numérique informatique et réseaux",
    school: "Lycée Jean Jaurès - Argenteuil",
    period: "Septembre 2020 - Juillet 2022",
    description: [],
  },
  {
    degree: "Baccalauréat STI2D - Option Système Informatique et Numérique",
    school: "Lycée Gustave Monod - Enghien-les-Bains",
    period: "Septembre 2018 - Juillet 2020",
    description: [],
  },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [activeImages, setActiveImages] = useState(projects.map(() => 0))

  const changeImage = (projectIndex: number, direction: "next" | "prev") => {
    setActiveImages((prevActiveImages) => {
      const newActiveImages = [...prevActiveImages]
      if (direction === "next") {
        newActiveImages[projectIndex] = (newActiveImages[projectIndex] + 1) % projects[projectIndex].images.length
      } else {
        newActiveImages[projectIndex] =
          (newActiveImages[projectIndex] - 1 + projects[projectIndex].images.length) %
          projects[projectIndex].images.length
      }
      return newActiveImages
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigation = [
    { name: "Accueil", icon: User, section: "home" },
    { name: "Formation", icon: GraduationCap, section: "education" },
    { name: "Expérience", icon: Briefcase, section: "experience" },
    { name: "Compétences", icon: Code, section: "skills" },
    { name: "Projets", icon: Folder, section: "projects" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold font-mono">Ryan Chaibat</h1>
          <nav>
            <ul className="flex space-x-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setActiveSection(item.section)
                      document.getElementById(item.section)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`p-2 rounded-full transition-colors ${
                      activeSection === item.section ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="sr-only">{item.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <Button variant="outline" asChild>
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </li>
              <li>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="sr-only">Changer de thème</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-2 bg-primary text-primary-foreground rounded-full shadow-lg z-50 hover:bg-primary/90 transition-colors"
            aria-label="Retour en haut de la page"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-16 mt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 font-mono">Ryan Chaibat</h1>
            <p className="text-xl mb-8">Développeur Full Stack</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Développeur passionné de 23 ans, entrant en Master 1 Lead Dev Full Stack en septembre 2025. Spécialisé
              dans le développement web et le DevOps, je combine créativité et expertise technique pour créer des
              solutions innovantes qui dépassent les attentes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="rounded-full" asChild>
                <a href="https://github.com/SkG-95" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="https://www.linkedin.com/in/ryan-chaibat-127537187/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/cv-ryan-chaibat.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  CV
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        <section id="education" className="min-h-screen py-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-mono">Formation</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-mono">{edu.degree}</CardTitle>
                    <CardDescription>{edu.school}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <ul className="list-disc list-inside">
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="min-h-screen py-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-mono">Expérience Professionnelle</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-mono">{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <ul className="list-disc list-inside">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="min-h-screen py-16">
          <h2 className="text-3xl font-bold mb-12 text-center font-mono">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-mono">Développement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[...skillsData.programmingLanguages, ...skillsData.frameworks].map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="h-6 w-6" />
                      <span className="font-mono text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-mono">DevOps & Outils</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[...skillsData.devops, ...skillsData.versionControl, ...skillsData.databases].map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="h-6 w-6" />
                      <span className="font-mono text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-mono">Systèmes d'exploitation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skillsData.os.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="h-6 w-6" />
                      <span className="font-mono text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-mono">Méthodes & Analyses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skillsData.methods.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      <span className="font-mono text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-16">
          <h2 className="text-3xl font-bold mb-12 text-center font-mono">Projets Réalisés</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.name} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-lg">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 relative h-[300px]">
                    {project.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img || "/placeholder.svg"}
                        alt={`${project.name} screenshot ${i + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className={`absolute top-0 left-0 transition-opacity duration-500 ${
                          i === activeImages[index] ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-background/80"
                        onClick={() => changeImage(index, "prev")}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-background/80"
                        onClick={() => changeImage(index, "next")}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Caractéristiques principales :</h4>
                      <ul className="list-disc list-inside">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-mono">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:+33760327760" className="hover:underline">
                    +33 7 60 32 77 60
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:rchaibat@gmail.com" className="hover:underline">
                    rchaibat@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Paris et périphérie</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-mono">Liens</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:underline">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:underline">
                    Formation
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:underline">
                    Expérience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:underline">
                    Compétences
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ryan Chaibat. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

