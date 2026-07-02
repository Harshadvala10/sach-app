export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a0a00 50%, #0f0f0f 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      color: "white",
      padding: "20px",
    }}>
      <div style={{
        background: "linear-gradient(90deg, #FF6B00, #FF8C00)",
        width: 70, height: 70,
        borderRadius: 16,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 32, fontWeight: 900, color: "white",
        marginBottom: 20,
        boxShadow: "0 0 40px rgba(255,107,0,0.5)",
      }}>S</div>

      <h1 style={{ fontSize: 42, fontWeight: 900, letterSpacing: 4, margin: 0, color: "#FF8C00" }}>
        SACH
      </h1>
      <p style={{ color: "#888", fontSize: 16, marginTop: 8, marginBottom: 40 }}>
        Rishta ho toh SACH ho
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, width: "100%", maxWidth: 340 }}>
        <a href="/verify" style={{
          background: "linear-gradient(90deg, #FF6B00, #FF8C00)",
          color: "white", padding: "16px",
          borderRadius: 12, textAlign: "center",
          fontWeight: 700, fontSize: 16,
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(255,107,0,0.4)",
        }}>
          🔍 Start Verification
        </a>
        <a href="/dashboard" style={{
          background: "transparent",
          border: "1px solid #FF6B00",
          color: "#FF6B00", padding: "16px",
          borderRadius: 12, textAlign: "center",
          fontWeight: 700, fontSize: 16,
          textDecoration: "none",
        }}>
          👤 login / Register
        </a>
      </div>

      <p style={{ color: "#444", fontSize: 12, marginTop: 40 }}>
        🔒 100% Confidential • Made in India
      </p>
    </main>
  );
}