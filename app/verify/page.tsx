"use client";
import { useState } from "react";

export default function VerifyPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", dob: "", city: "", aadhaar: "", pan: "",
  });

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a0a00 50%, #0f0f0f 100%)",
      fontFamily: "sans-serif", color: "white", padding: "20px",
    }}>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", padding: "30px 0 20px" }}>
          <div style={{
            background: "linear-gradient(90deg, #FF6B00, #FF8C00)",
            width: 50, height: 50, borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 900, margin: "0 auto 10px",
          }}>S</div>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: "#FF8C00", margin: 0 }}>
            Start Verification
          </h1>
          <p style={{ color: "#666", fontSize: 13, marginTop: 4 }}>
            Step {step} of 2
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{
          height: 4, background: "#222", borderRadius: 2, marginBottom: 24,
        }}>
          <div style={{
            height: "100%", borderRadius: 2,
            width: step === 1 ? "50%" : "100%",
            background: "linear-gradient(90deg, #FF6B00, #FF8C00)",
            transition: "width 0.3s",
          }} />
        </div>

        {/* Card */}
        <div style={{
          background: "#1a1a1a", border: "1px solid #2a2a2a",
          borderRadius: 16, padding: 24,
        }}>

          {step === 1 && (
            <>
              <h2 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 20px", color: "#FF8C00" }}>
                👤 Personal Details
              </h2>

              {[
                { label: "Full Name", field: "name", placeholder: "Rahul Sharma" },
                { label: "Date of Birth", field: "dob", placeholder: "DD/MM/YYYY" },
                { label: "City", field: "city", placeholder: "Surat" },
              ].map(item => (
                <div key={item.field} style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, color: "#888", display: "block", marginBottom: 6 }}>
                    {item.label}
                  </label>
                  <input
                    value={form[item.field as keyof typeof form]}
                    onChange={e => update(item.field, e.target.value)}
                    placeholder={item.placeholder}
                    style={{
                      width: "100%", background: "#111",
                      border: "1px solid #333", borderRadius: 8,
                      padding: "12px", color: "white", fontSize: 14,
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}

              <button
                onClick={() => form.name && form.dob && form.city && setStep(2)}
                style={{
                  width: "100%", padding: 14, marginTop: 8,
                  background: form.name && form.dob && form.city
                    ? "linear-gradient(90deg, #FF6B00, #FF8C00)" : "#333",
                  color: form.name && form.dob && form.city ? "white" : "#666",
                  border: "none", borderRadius: 10,
                  fontWeight: 700, fontSize: 15, cursor: "pointer",
                }}
              >
                Next →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 20px", color: "#FF8C00" }}>
                🪪 Document Verification
              </h2>

              {[
                { label: "Aadhaar Number", field: "aadhaar", placeholder: "XXXX XXXX XXXX" },
                { label: "PAN Number", field: "pan", placeholder: "ABCDE1234F" },
              ].map(item => (
                <div key={item.field} style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, color: "#888", display: "block", marginBottom: 6 }}>
                    {item.label}
                  </label>
                  <input
                    value={form[item.field as keyof typeof form]}
                    onChange={e => update(item.field, e.target.value)}
                    placeholder={item.placeholder}
                    style={{
                      width: "100%", background: "#111",
                      border: "1px solid #333", borderRadius: 8,
                      padding: "12px", color: "white", fontSize: 14,
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}

              <div style={{
                background: "#111", border: "1px solid #FF6B0033",
                borderRadius: 10, padding: 12, marginBottom: 16, fontSize: 12, color: "#666",
              }}>
                🔒 Your documents are encrypted and never shared with third parties.
              </div>

              <button
                onClick={() => form.aadhaar && form.pan && alert("Verification submitted!")}
                style={{
                  width: "100%", padding: 14,
                  background: form.aadhaar && form.pan
                    ? "linear-gradient(90deg, #FF6B00, #FF8C00)" : "#333",
                  color: form.aadhaar && form.pan ? "white" : "#666",
                  border: "none", borderRadius: 10,
                  fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 10,
                }}
              >
                ✅ Submit Verification
              </button>

              <button
                onClick={() => setStep(1)}
                style={{
                  width: "100%", padding: 12,
                  background: "transparent", border: "none",
                  color: "#666", fontSize: 13, cursor: "pointer",
                }}
              >
                ← Go Back
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