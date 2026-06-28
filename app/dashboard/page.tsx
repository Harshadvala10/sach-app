"use client";

export default function Dashboard() {
  const stats = [
    { label: "Verifications Done", value: "0", icon: "✅" },
    { label: "Pending", value: "0", icon: "⏳" },
    { label: "Reports Ready", value: "0", icon: "📄" },
  ];

  const actions = [
    { label: "New Verification", icon: "🔍", href: "/verify", color: "#FF6B00" },
    { label: "Social Profile Check", icon: "📱", href: "/social", color: "#7B2D8B" },
    { label: "View Reports", icon: "📄", href: "/reports", color: "#0A66C2" },
    { label: "Settings", icon: "⚙️", href: "/settings", color: "#333" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a0a00 50%, #0f0f0f 100%)",
      fontFamily: "sans-serif", color: "white",
    }}>
      <div style={{
        background: "linear-gradient(90deg, #FF6B00, #FF8C00)",
        padding: "16px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            background: "white", width: 36, height: 36, borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, color: "#FF6B00", fontSize: 16,
          }}>S</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>SACH</div>
            <div style={{ fontSize: 10, opacity: 0.85 }}>Rishta ho toh SACH ho</div>
          </div>
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(255,255,255,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, cursor: "pointer",
        }}>👤</div>
      </div>

      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>Welcome back! 👋</h2>
          <p style={{ color: "#666", fontSize: 13, marginTop: 4 }}>
            Here is your verification overview
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10, marginBottom: 28,
        }}>
          {stats.map(stat => (
            <div key={stat.label} style={{
              background: "#1a1a1a", border: "1px solid #2a2a2a",
              borderRadius: 12, padding: "14px 10px", textAlign: "center",
            }}>
              <div style={{ fontSize: 22 }}>{stat.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#FF8C00", margin: "6px 0 2px" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 10, color: "#666", lineHeight: 1.3 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: 14, color: "#888", fontWeight: 600, marginBottom: 12 }}>
          QUICK ACTIONS
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {actions.map(action => (
            <a key={action.label} href={action.href} style={{
              background: "#1a1a1a", border: "1px solid #2a2a2a",
              borderRadius: 12, padding: "16px",
              display: "flex", alignItems: "center", gap: 14,
              textDecoration: "none", color: "white",
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: "#222",
                border: "1px solid #333",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
              }}>{action.icon}</div>
              <span style={{ fontWeight: 600, fontSize: 15 }}>{action.label}</span>
              <span style={{ marginLeft: "auto", color: "#444" }}>→</span>
            </a>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "#333", fontSize: 12, marginTop: 30 }}>
          🔒 100% Confidential • SACH App v1.0
        </p>
      </div>
    </main>
  );
}