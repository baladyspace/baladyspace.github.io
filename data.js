// ==========================================
//  ملف بيانات الشهادات
//  الرابط يُبنى من رقم الشهادة مباشرة
//  مثال: certificate.html?id=465965265357
// ==========================================

const certificates = [
  {
    // ⚠️ id = certificateNumber (يجب أن يكونا متطابقين)
    id: "465965265357",
    title: "نموذج شهادة صحية - سارة أحمد",

    // 📸 مسار الصورة داخل المستودع
    photo: "images/persons/sara.jpg",

    name: "سارة أحمد محمد",
    gender: "أنثى",
    nationality: "مصرية",
    residenceNumber: "2317007710",
    certificateNumber: "465965265357",
    job: "مشغل الجميلة انا للتزيين النسائي",
    municipality: "بلدية الرياض",
    secretariat: "أمانة منطقة الرياض",
    issueDateHijri: "1448/04/08",
    issueDateGregorian: "2026/9/21",
    expiryDateHijri: "1449/04/08",
    expiryDateGregorian: "2027/9/21",
    inspectionType: "منشآت الغذاء",
    inspectionEndHijri: "1451/04/08",
    licenseNumber: "",
    facilityName: "",
    facilityNumber: ""
  },
  {
    id: "111222333444",
    title: "نموذج شهادة صحية - محمد علي",
    photo: "images/persons/mohammed.jpg",
    name: "محمد علي حسن",
    gender: "ذكر",
    nationality: "سعودي",
    residenceNumber: "1234567890",
    certificateNumber: "111222333444",
    job: "طباخ",
    municipality: "بلدية جدة",
    secretariat: "أمانة محافظة جدة",
    issueDateHijri: "1447/01/15",
    issueDateGregorian: "2025/7/10",
    expiryDateHijri: "1448/01/15",
    expiryDateGregorian: "2026/7/10",
    inspectionType: "منشآت الغذاء",
    inspectionEndHijri: "1447/07/15",
    licenseNumber: "",
    facilityName: "",
    facilityNumber: ""
  }
  // 💡 لإضافة شهادة جديدة: انسخ الكتلة مع تغيير id + photo + البيانات
];
