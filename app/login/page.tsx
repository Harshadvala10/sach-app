"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendOTP = async () => {
    if (!email) return;
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) { setMessage("Error: " + error.message); }
    else { setMessage("OTP sent!"); setStep("otp"); }
    setLoading(false);
  };

  const verifyOTP = async () => {
    if (otp.length !== 6) return;
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({ email, token: otp, type: "email" });
    if (error) { setMessage("Wrong OTP."); }
    else { window.location.href = "/dashboard"; }
    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0f0f0f", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "white", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ background: "linear-gradient(90deg, #FF6B00, #FF8C00)", width: 60, height: 60, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 900, color: "white", margin: "0 auto 12px" }}>S</div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "#FF8C00", margin: 0 }}>SACH</h1>
          <p style={{ color: "#666", fontSize: 13, marginTop: 4 }}>Rishta ho toh SACH ho</p>
        </div>
        <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 24 }}>
          {step === "email" ? (
            <>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>Login</h2>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" type="email" style={{ width: "100%", background: "#111", border: "1px solid #333", borderRadius: 8, padding: "12px", color: "white", fontSize: 14, outline: "none", boxSizing: "border-box", marginBottom: 16 }} />
              {message && <p style={{ color: "#FF8C00", fontSize: 12, marginBottom: 12 }}>{message}</p>}
              <button onClick={sendOTP} disabled={loading} style={{ width: "100%", padding: 14, background: "linear-gradient(90deg, #FF6B00, #FF8C00)", color: "white", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </>
          ) : (
            <>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>Verify OTP</h2>
              <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="------" maxLength={6} style={{ width: "100%", background: "#111", border: "1px solid #333", borderRadius: 8, padding: "12px", color: "white", fontSize: 20, outline: "none", textAlign: "center", letterSpacing: 8, marginBottom: 16, boxSizing: "border-box" }} />
              {message && <p style={{ color: "#EF4444", fontSize: 12, marginBottom: 12 }}>{message}</p>}
              <button onClick={verifyOTP} disabled={loading} style={{ width: "100%", padding: 14, background: "linear-gradient(90deg, #FF6B00, #FF8C00)", color: "white", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}