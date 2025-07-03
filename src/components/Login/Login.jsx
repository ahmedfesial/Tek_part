import React, { useState } from "react";
import { Link } from "react-router-dom";
import IntroImg from "../../assets/photos/Register.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do login logic here (API call, validation, etc.)
    if (!email || !password) {
      setError("يرجى ملء جميع الحقول");
    } else {
      setError("");
      console.log("تم تسجيل الدخول بنجاح", { email, password });
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 flex items-center justify-center font-cairo">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 flex flex-col-reverse md:flex-row items-center gap-10 w-full max-w-5xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#2B3674] mb-6 text-right">تسجيل الدخول</h2>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            <div>
              <label className="block mb-1 text-gray-700">البريد الإلكتروني</label>
              <input
                type="email"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C64D5]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">كلمة المرور</label>
              <input
                type="password"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C64D5]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4C64D5] text-white py-2 rounded-lg hover:bg-[#3B4EAB] transition duration-300"
            >
              دخول
            </button>
            <p className="text-sm text-gray-600 mt-2 text-center">
              ليس لديك حساب؟ <Link to="/register" className="text-[#4C64D5]">سجّل الآن</Link>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={IntroImg} alt="Welcome" className="w-full max-w-sm mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;