import React, { useState } from "react";
import { Link } from "react-router-dom";
import IntroImg from "../../assets/photos/Register.png";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    avatar: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.name.length < 3) {
      setError("الاسم يجب أن يكون 3 أحرف على الأقل.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("صيغة البريد الإلكتروني غير صحيحة.");
      return;
    }

    if (!form.role.trim()) {
      setError("الرجاء كتابة المسمى الوظيفي.");
      return;
    }

    if (!validatePassword(form.password)) {
      setError(
        "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم ورمز."
      );
      return;
    }

    // ✅ Passed validation
    console.log("تم التسجيل بنجاح:", form);
    setSuccess("تم إنشاء الحساب بنجاح!");
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-gray-100 font-cairo text-gray-800"
    >
      {/* الصورة الترحيبية */}
      <div className="hidden sm:flex flex-1 justify-center items-center p-6">
        <img
          src={IntroImg}
          alt="تسجيل"
          className="w-80 h-auto object-contain"
        />
      </div>

      {/* نموذج التسجيل */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-[#2B3674] mb-6 text-center">
          إنشاء حساب جديد
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm text-right">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm text-right">
            {success}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4 text-right">
          <div>
            <label className="block mb-1 text-sm font-medium">الاسم الكامل</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">المسمى الوظيفي</label>
            <input
              type="text"
              name="role"
              placeholder="مثلاً: UI / UX Designer"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={form.role}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">كلمة المرور</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={form.password}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4C64D5] hover:bg-[#3B4EAB] text-white py-2 rounded transition"
          >
            إنشاء الحساب
          </button>

          <p className="text-sm mt-4 text-center">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" className="text-[#4C64D5] hover:underline">
              تسجيل الدخول
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;