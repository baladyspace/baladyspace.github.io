// ==========================================
//  ملف بيانات الشهادات
//  ملاحظة: الرابط يُبنى من رقم الشهادة مباشرة
//           مثال: certificate.html?id=465965265357
// ==========================================

const certificates = [
  {
    // ⚠️ حقل id يجب أن يكون مطابقاً تماماً لرقم الشهادة
    id: "465965265357",
    title: "نموذج شهادة صحية - سارة أحمد",
    photo: "https://i.pravatar.cc/300?img=5",
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
    photo: "https://i.pravatar.cc/300?img=12",
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
  // 💡 لإضافة شهادة جديدة:
  //    - id يجب أن يكون نفس رقم الشهادة
  //    - certificateNumber يجب أن يكون نفس id
];
