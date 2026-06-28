"use client";
import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone");

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a0a00 50%, #0f0f0f 100%)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      fontFamily: "sans-serif", color: "white", padding: "20px",
    }}>
      <div style={{ width: "100%", maxWidth: 360 }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            background: "linear-gradient(90deg, #FF6B00, #FF8C00)",
            width: 60, height: 60, borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, fontWeight: 900, color: "white",
            margin: "0 auto 12px",
            boxShadow: "0 0 30px rgba(255,107,0,0.4)",
          }}>S</div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#FF8C00", margin: 0 }}>SACH</h1>
          <p style={{ color: "#666", fontSize: 13, marginTop: 4 }}>Rishta ho toh SACH ho</p>
        </div>

        {/* Card */}
        <div style={{
          background: "#1a1a1a", border: "1px solid #2a2a2a",
          borderRadius: 16, padding: 24,
        }}>
          {step === "phone" ? (
            <>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>Login</h2>
              <p style={{ color: "#666", fontSize: 13, marginBottom: 20 }}>
                Enter Your Mobile number to receive OTP
              </p>

              <label style={{ fontSize: 12, color: "#888", display: "block", marginBottom: 6 }}>
                Mobile Number
              </label>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <div style={{
                  background: "#111", border: "1px solid #333",
                  borderRadius: 8, padding: "12px", color: "#888", fontSize: 14,
                }}>+91</div>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="9876543210"
                  maxLength={10}
                  style={{
                    flex: 1, background: "#111", border: "1px solid #333",
                    borderRadius: 8, padding: "12px", color: "white",
                    fontSize: 14, outline: "none",
                  }}
                />
              </div>

              <button
                onClick={() => phone.length === 10 && setStep("otp")}
                style={{
                  width: "100%", padding: 14,
                  background: phone.length === 10
                    ? "linear-gradient(90deg, #FF6B00, #FF8C00)"
                    : "#333",
                  color: phone.length === 10 ? "white" : "#666",
                  border: "none", borderRadius: 10,
                  fontWeight: 700, fontSize: 15, cursor: "pointer",
                }}
              >
                Send OTP →
              </button>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>Verify OTP</h2>
              <p style={{ color: "#666", fontSize: 13, marginBottom: 20 }}>
                OTP sent to +91 {phone}
              </p>

              <label style={{ fontSize: 12, color: "#888", display: "block", marginBottom: 6 }}>
                6-digit OTP
              </label>
              <input
                value={otp}
                onChange={e => setOtp(e.target.value)}
                placeholder="------"
                maxLength={6}
                style={{
                  width: "100%", background: "#111", border: "1px solid #333",
                  borderRadius: 8, padding: "12px", color: "white",
                  fontSize: 20, outline: "none", textAlign: "center",
                  letterSpacing: 8, marginBottom: 16, boxSizing: "border-box",
                }}
              />

              <button
                onClick={() => otp.length === 6 && alert("Login successful!")}
                style={{
                  width: "100%", padding: 14,
                  background: otp.length === 6
                    ? "linear-gradient(90deg, #FF6B00, #FF8C00)"
                    : "#333",
                  color: otp.length === 6 ? "white" : "#666",
                  border: "none", borderRadius: 10,
                  fontWeight: 700, fontSize: 15, cursor: "pointer",
                  marginBottom: 10,
                }}
              >
                ✅ Verify
              </button>

              <button
                onClick={() => setStep("phone")}
                style={{
                  width: "100%", padding: 12,
                  background: "transparent", border: "none",
                  color: "#666", fontSize: 13, cursor: "pointer",
                }}
              >
                ← Change Number
              </button>
            </>
          )}
        </div>

        <p style={{ textAlign: "center", color: "#444", fontSize: 12, marginTop: 20 }}>
          🔒 Your data is safe with us
        </p>
      </div>
    </main>
  );
}