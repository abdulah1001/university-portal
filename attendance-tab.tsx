"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookMarked,
  Download,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  BarChart3,
  TrendingUp,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  CalendarDays,
  UserCheck,
  Bell,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function AttendanceTab() {
  const [selectedMonth, setSelectedMonth] = useState<string>("march")
  const [selectedCourse, setSelectedCourse] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedClass, setExpandedClass] = useState<number | null>(null)
  const { toast } = useToast()

  const attendanceData = [
    {
      id: 1,
      code: "CS-331",
      title: "Computer Networks (Theory)",
      faculty: "Sadia Waheed Awan",
      total: 11,
      present: 9,
      absent: 2,
      percentage: 81.82,
      lastClass: "March 28, 2025",
      nextClass: "April 4, 2025",
      classes: [
        { date: "March 28, 2025", status: "present", topic: "Network Security Protocols" },
        { date: "March 21, 2025", status: "present", topic: "TCP/IP Model" },
        { date: "March 14, 2025", status: "present", topic: "Routing Algorithms" },
        { date: "March 7, 2025", status: "absent", topic: "Network Topologies" },
        { date: "February 28, 2025", status: "present", topic: "OSI Model" },
      ],
    },
    {
      id: 2,
      code: "CS-331",
      title: "Computer Networks (Practical)",
      faculty: "Sadia Waheed Awan",
      total: 5,
      present: 4,
      absent: 1,
      percentage: 80,
      lastClass: "March 26, 2025",
      nextClass: "April 2, 2025",
      classes: [
        { date: "March 26, 2025", status: "present", topic: "Wireshark Packet Analysis" },
        { date: "March 12, 2025", status: "present", topic: "Network Configuration" },
        { date: "February 26, 2025", status: "present", topic: "IP Addressing Lab" },
        { date: "February 12, 2025", status: "absent", topic: "Subnetting Practice" },
        { date: "January 29, 2025", status: "present", topic: "Network Setup" },
      ],
    },
    {
      id: 3,
      code: "CS-347",
      title: "Introduction to Information Security (Theory)",
      faculty: "Isra Naz",
      total: 11,
      present: 8,
      absent: 3,
      percentage: 72.73,
      lastClass: "March 27, 2025",
      nextClass: "April 3, 2025",
      classes: [
        { date: "March 27, 2025", status: "present", topic: "Cryptography Basics" },
        { date: "March 20, 2025", status: "absent", topic: "Authentication Methods" },
        { date: "March 13, 2025", status: "present", topic: "Security Policies" },
        { date: "March 6, 2025", status: "present", topic: "Threat Modeling" },
        { date: "February 27, 2025", status: "present", topic: "Security Fundamentals" },
      ],
    },
    {
      id: 4,
      code: "AI-365",
      title: "Computer Vision (Theory)",
      faculty: "Rizwan Taj",
      total: 10,
      present: 9,
      absent: 1,
      percentage: 90,
      lastClass: "March 25, 2025",
      nextClass: "April 1, 2025",
      classes: [
        { date: "March 25, 2025", status: "present", topic: "Object Detection" },
        { date: "March 18, 2025", status: "present", topic: "Image Segmentation" },
        { date: "March 11, 2025", status: "present", topic: "Feature Extraction" },
        { date: "March 4, 2025", status: "present", topic: "Image Processing" },
        { date: "February 25, 2025", status: "absent", topic: "Computer Vision Intro" },
      ],
    },
    {
      id: 5,
      code: "AI-365",
      title: "Computer Vision (Practical)",
      faculty: "Rizwan Taj",
      total: 5,
      present: 4,
      absent: 1,
      percentage: 80,
      lastClass: "March 24, 2025",
      nextClass: "April 7, 2025",
      classes: [
        { date: "March 24, 2025", status: "present", topic: "OpenCV Lab" },
        { date: "March 10, 2025", status: "present", topic: "Object Tracking Implementation" },
        { date: "February 24, 2025", status: "absent", topic: "Image Classification Lab" },
        { date: "February 10, 2025", status: "present", topic: "Feature Detection Lab" },
        { date: "January 27, 2025", status: "present", topic: "Python CV Setup" },
      ],
    },
    {
      id: 6,
      code: "AI-356",
      title: "Natural Language Processing (Theory)",
      faculty: "Rizwan Taj",
      total: 10,
      present: 8,
      absent: 2,
      percentage: 80,
      lastClass: "March 29, 2025",
      nextClass: "April 5, 2025",
      classes: [
        { date: "March 29, 2025", status: "present", topic: "Transformers Architecture" },
        { date: "March 22, 2025", status: "present", topic: "Word Embeddings" },
        { date: "March 15, 2025", status: "absent", topic: "Text Classification" },
        { date: "March 8, 2025", status: "present", topic: "Language Models" },
        { date: "March 1, 2025", status: "present", topic: "NLP Fundamentals" },
      ],
    },
    {
      id: 7,
      code: "AI-325",
      title: "Intelligent web design and development (Theory)",
      faculty: "Rizwan Taj",
      total: 10,
      present: 9,
      absent: 1,
      percentage: 90,
      lastClass: "March 26, 2025",
      nextClass: "April 2, 2025",
      classes: [
        { date: "March 26, 2025", status: "present", topic: "Intelligent UI/UX" },
        { date: "March 19, 2025", status: "present", topic: "Web Personalization" },
        { date: "March 12, 2025", status: "present", topic: "Recommendation Systems" },
        { date: "March 5, 2025", status: "present", topic: "Web Analytics" },
        { date: "February 26, 2025", status: "absent", topic: "Web Development Basics" },
      ],
    },
    {
      id: 8,
      code: "AI-325",
      title: "Intelligent web design and development (Practical)",
      faculty: "Afrasiab Sultan",
      total: 5,
      present: 4,
      absent: 1,
      percentage: 80,
      lastClass: "March 23, 2025",
      nextClass: "April 6, 2025",
      classes: [
        { date: "March 23, 2025", status: "present", topic: "React Implementation" },
        { date: "March 9, 2025", status: "present", topic: "API Integration" },
        { date: "February 23, 2025", status: "absent", topic: "Database Connection" },
        { date: "February 9, 2025", status: "present", topic: "Frontend Development" },
        { date: "January 26, 2025", status: "present", topic: "Project Setup" },
      ],
    },
    {
      id: 9,
      code: "AI-325",
      title: "Intelligent web design and development (Theory)",
      faculty: "Aqsa Safdar",
      total: 10,
      present: 9,
      absent: 1,
      percentage: 90,
      lastClass: "March 30, 2025",
      nextClass: "April 6, 2025",
      classes: [
        { date: "March 30, 2025", status: "present", topic: "Advanced Web Concepts" },
        { date: "March 23, 2025", status: "present", topic: "Web Security" },
        { date: "March 16, 2025", status: "present", topic: "Performance Optimization" },
        { date: "March 9, 2025", status: "present", topic: "Responsive Design" },
        { date: "March 2, 2025", status: "absent", topic: "Web Standards" },
      ],
    },
  ]

  const filteredAttendanceData = attendanceData.filter((item) => {
    if (selectedCourse !== "all" && item.code !== selectedCourse) return false
    if (
      searchQuery &&
      !(
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.faculty.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
      return false
    return true
  })

  const toggleClassDetails = (id: number) => {
    if (expandedClass === id) {
      setExpandedClass(null)
    } else {
      setExpandedClass(id)
    }
  }

  const handleExportAttendance = () => {
    toast({
      title: "Attendance Report Downloaded",
      description: "Your attendance report has been downloaded successfully.",
      variant: "success",
    })
  }

  const getStatusColor = (status: string) => {
    return status === "present"
      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
  }

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600 dark:text-green-400"
    if (percentage >= 75) return "text-amber-600 dark:text-amber-400"
    return "text-red-600 dark:text-red-400"
  }

  const getStatusBadge = (percentage: number) => {
    if (percentage >= 80) {
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Good</Badge>
    } else if (percentage >= 75) {
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Warning</Badge>
    } else {
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Critical</Badge>
    }
  }

  const uniqueCourses = [...new Set(attendanceData.map((item) => item.code))]

  return (
    <div key="attendance-tab">
      <div className="mb-4 flex items-center justify-between">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center"
        >
          <BookMarked className="mr-2 h-6 w-6 text-navy-800 dark:text-blue-400" />
          <h1 className="text-2xl font-bold text-navy-900 dark:text-white">Attendance Record</h1>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          <span>YOU ARE HERE: </span>
          <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
            Home
          </a>
          <span> / </span>
          <span className="text-gray-700 dark:text-gray-300">Attendance</span>
        </motion.div>
      </div>

      <motion.div
        className="mb-6 overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white dark:border-gray-700">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-white/20 p-2">
                <BookMarked className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Attendance Dashboard</h2>
            </div>
            <p className="mb-4 text-white/80">
              Track your class attendance, view attendance statistics, and monitor your attendance requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Academic Year 2024-2025</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Current Semester: Fall 2024</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>Minimum Required: 75%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Course Details</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-blue-100">Overall Attendance</p>
                          <p className="text-2xl font-bold text-white">83.5%</p>
                        </div>
                        <div className="rounded-full bg-white/20 p-3 text-white">
                          <Calendar className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Progress value={83.5} className="mt-2 h-2" />
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        You're maintaining good attendance across all courses.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-green-100">Classes Attended</p>
                          <p className="text-2xl font-bold text-white">64 / 77</p>
                        </div>
                        <div className="rounded-full bg-white/20 p-3 text-white">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Present Count</span>
                        <span className="font-medium text-green-600 dark:text-green-400">64 Classes</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">Last attended: March 30, 2025</div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-red-100">Classes Missed</p>
                          <p className="text-2xl font-bold text-white">13 / 77</p>
                        </div>
                        <div className="rounded-full bg-white/20 p-3 text-white">
                          <AlertTriangle className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Absence Count</span>
                        <span className="font-medium text-red-600 dark:text-red-400">13 Classes</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">Remaining allowed absences: 6</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Attendance Trends</CardTitle>
                  <CardDescription>Your attendance patterns over the semester</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Monthly Attendance</h3>
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="mt-4 space-y-2">
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">January</span>
                            <span className="text-xs font-medium">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">February</span>
                            <span className="text-xs font-medium">78%</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">March</span>
                            <span className="text-xs font-medium">88%</span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Day of Week Analysis</h3>
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="mt-4 space-y-2">
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Monday</span>
                            <span className="text-xs font-medium">92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Wednesday</span>
                            <span className="text-xs font-medium">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Friday</span>
                            <span className="text-xs font-medium">76%</span>
                          </div>
                          <Progress value={76} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Upcoming Classes</h3>
                      <CalendarDays className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-900/30">
                        <div>
                          <p className="font-medium">CS-331: Computer Networks</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">April 4, 2025 • 10:00 AM</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          Tomorrow
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3 dark:bg-purple-900/30">
                        <div>
                          <p className="font-medium">AI-356: Natural Language Processing</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">April 5, 2025 • 1:00 PM</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                          2 Days
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 dark:bg-green-900/30">
                        <div>
                          <p className="font-medium">AI-325: Intelligent Web Design</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">April 6, 2025 • 9:00 AM</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          3 Days
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-6">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Select defaultValue={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Courses</SelectItem>
                      {uniqueCourses.map((code) => (
                        <SelectItem key={code} value={code}>
                          {code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select defaultValue={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="march">March 2025</SelectItem>
                      <SelectItem value="february">February 2025</SelectItem>
                      <SelectItem value="january">January 2025</SelectItem>
                      <SelectItem value="all">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    <Input
                      placeholder="Search courses..."
                      className="pl-9 w-[200px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={handleExportAttendance}
                  >
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {filteredAttendanceData.length > 0 ? (
                    filteredAttendanceData.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden rounded-lg border dark:border-gray-700"
                      >
                        <div
                          className="flex cursor-pointer items-center justify-between border-b p-4 dark:border-gray-700"
                          onClick={() => toggleClassDetails(item.id)}
                        >
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{item.code}</span>
                                  {getStatusBadge(item.percentage)}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Faculty: {item.faculty}</p>
                              </div>
                              <div className="mt-2 flex items-center gap-4 md:mt-0">
                                <div className="text-center">
                                  <div className="text-sm font-medium">Present</div>
                                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                    {item.present}
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm font-medium">Absent</div>
                                  <div className="text-lg font-bold text-red-600 dark:text-red-400">{item.absent}</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm font-medium">Percentage</div>
                                  <div className={`text-lg font-bold ${getPercentageColor(item.percentage)}`}>
                                    {item.percentage.toFixed(1)}%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            {expandedClass === item.id ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            )}
                          </div>
                        </div>

                        <AnimatePresence>
                          {expandedClass === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-4">
                                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30">
                                    <div className="flex items-center gap-2">
                                      <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                      <h4 className="font-medium">Class Schedule</h4>
                                    </div>
                                    <div className="mt-2 space-y-1 text-sm">
                                      <p>
                                        <span className="text-gray-500 dark:text-gray-400">Last Class:</span>{" "}
                                        {item.lastClass}
                                      </p>
                                      <p>
                                        <span className="text-gray-500 dark:text-gray-400">Next Class:</span>{" "}
                                        {item.nextClass}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/30">
                                    <div className="flex items-center gap-2">
                                      <UserCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                                      <h4 className="font-medium">Attendance Status</h4>
                                    </div>
                                    <div className="mt-2 space-y-1 text-sm">
                                      <p>
                                        <span className="text-gray-500 dark:text-gray-400">Current:</span>{" "}
                                        <span className={getPercentageColor(item.percentage)}>
                                          {item.percentage.toFixed(1)}%
                                        </span>
                                      </p>
                                      <p>
                                        <span className="text-gray-500 dark:text-gray-400">Required:</span> 75%
                                      </p>
                                      <p>
                                        <span className="text-gray-500 dark:text-gray-400">Status:</span>{" "}
                                        {item.percentage >= 75 ? "Good Standing" : "At Risk"}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/30">
                                    <div className="flex items-center gap-2">
                                      <Bell className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                      <h4 className="font-medium">Notifications</h4>
                                    </div>
                                    <div className="mt-2 space-y-1 text-sm">
                                      {item.percentage < 75 ? (
                                        <p className="text-red-600 dark:text-red-400">
                                          Warning: Attendance below required threshold!
                                        </p>
                                      ) : (
                                        <p className="text-green-600 dark:text-green-400">
                                          Your attendance is satisfactory.
                                        </p>
                                      )}
                                      <p className="text-gray-600 dark:text-gray-400">
                                        Next class reminder will be sent 24 hours before.
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-4">
                                  <h4 className="mb-2 font-medium">Attendance History</h4>
                                  <div className="rounded-lg border dark:border-gray-700">
                                    <div className="overflow-x-auto">
                                      <table className="w-full">
                                        <thead>
                                          <tr className="border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                                            <th className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                              Date
                                            </th>
                                            <th className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                              Topic
                                            </th>
                                            <th className="p-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                              Status
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {item.classes.map((classItem, index) => (
                                            <tr
                                              key={index}
                                              className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
                                            >
                                              <td className="p-3">{classItem.date}</td>
                                              <td className="p-3">{classItem.topic}</td>
                                              <td className="p-3 text-center">
                                                <Badge className={getStatusColor(classItem.status)}>
                                                  {classItem.status === "present" ? "Present" : "Absent"}
                                                </Badge>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-4 flex justify-end">
                                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <ArrowUpRight className="h-4 w-4" />
                                    View Full Details
                                  </Button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-lg border border-dashed p-8 text-center dark:border-gray-700"
                    >
                      <p className="text-gray-500 dark:text-gray-400">
                        No courses found matching your search criteria.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Calendar</CardTitle>
                  <CardDescription>View your attendance patterns on a calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <div className="min-w-[900px]">
                      <div className="mb-4 grid grid-cols-7 gap-1 text-center">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                          <div key={day} className="p-2 text-sm font-medium">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {/* Empty cells for days before the month starts */}
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={`empty-start-${i}`}
                            className="h-16 rounded-lg border border-dashed p-1 dark:border-gray-700"
                          ></div>
                        ))}

                        {/* Calendar days */}
                        {[...Array(31)].map((_, i) => {
                          const day = i + 1
                          const hasClass = day % 3 === 0 || day % 5 === 0
                          const isPresent = hasClass && day % 7 !== 0
                          const isAbsent = hasClass && day % 7 === 0

                          return (
                            <div
                              key={`day-${day}`}
                              className={`h-16 rounded-lg border p-1 ${
                                hasClass
                                  ? isPresent
                                    ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                                    : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                                  : "border-gray-200 dark:border-gray-700"
                              }`}
                            >
                              <div className="flex h-full flex-col">
                                <div className="text-right text-sm">{day}</div>
                                {hasClass && (
                                  <div className="mt-auto">
                                    <div
                                      className={`text-xs ${
                                        isPresent
                                          ? "text-green-600 dark:text-green-400"
                                          : "text-red-600 dark:text-red-400"
                                      }`}
                                    >
                                      {isPresent ? "Present" : "Absent"}
                                    </div>
                                    <div className="truncate text-xs text-gray-500 dark:text-gray-400">
                                      {day % 3 === 0 ? "CS-331" : "AI-365"}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}

                        {/* Empty cells for days after the month ends */}
                        {[...Array(1)].map((_, i) => (
                          <div
                            key={`empty-end-${i}`}
                            className="h-16 rounded-lg border border-dashed p-1 dark:border-gray-700"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">Absent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <span className="text-sm">No Class</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/30">
            <div className="flex items-start">
              <AlertTriangle className="mr-3 mt-0.5 h-5 w-5 text-yellow-600 dark:text-yellow-500" />
              <div>
                <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-400">Attendance Policy</h4>
                <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                  Students must maintain at least 75% attendance in all courses to be eligible for final examinations.
                  If your attendance falls below 75%, please contact your faculty advisor immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

