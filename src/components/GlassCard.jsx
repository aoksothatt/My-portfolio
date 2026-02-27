import React from "react";

const GlassCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
        gap: 24,
      }}
    >
      {/* Glass Card */}
      {/* frist card */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png"
          alt="HTML5"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            HTML5
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            HyperText Markup Language
          </div>
        </div>
      </div>
      {/* 2 card */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />
        <img
          width={42}
          height={42}
          src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"
          alt="CSS3"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />
        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            CSS
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Cascading Style Sheets
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
          alt="HTML5"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            JS
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Language
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
          alt="HTML5"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            Bootstrap
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Framwork
          </div>
        </div>
      </div>
      {/* card 5 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/960px-Tailwind_CSS_Logo.svg.png"
          alt="HTML5"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            Tailwind
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Framwork
          </div>
        </div>
      </div>
      {/* card 6 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/250px-React_Logo_SVG.svg.png"
          alt="HTML5"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            React js
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Framwork
          </div>
        </div>
      </div>
      {/* card 7 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={28}
          height={30}
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          alt="Figma"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            Figma
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Tool
          </div>
        </div>
      </div>
      {/* card 8 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src="https://static.vecteezy.com/system/resources/previews/056/850/847/non_2x/canva-app-logo-on-a-transparent-background-free-png.png"
          alt="Canva"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            Canva
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Tool
          </div>
        </div>
      </div>
      {/* card 9 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src="https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png"
          alt="Canva"
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            VS Code
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Tool
          </div>
        </div>
      </div>
      {/* card 10 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src=""
          alt=""
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            Comming soon
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Language
          </div>
        </div>
      </div>
      {/* card 11 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src=""
          alt=""
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            Comming soon
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            language
          </div>
        </div>
      </div>
      {/* card 12 */}
      <div
        style={{
          width: 380,
          height: 70,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          // The glass border effect — key technique:
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.35),
          0 8px 32px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.5),
          inset 0 -1px 0 rgba(255,255,255,0.1)
          `,
          position: "relative",
          overflow: "hidden",
        }}
        className="holographic-card"
      >
        {/* Top-left shimmer highlight — gives the glass "edge" refraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "16px 16px 0 0",
            pointerEvents: "none",
          }}
        />

        <img
          width={42}
          height={42}
          src=""
          alt=""
          style={{
            flexShrink: 0,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          }}
        />

        <div>
          <div
            style={{
              color: "rgba(255,255,255,0.95)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.01em",
            }}
          >
            comming soon
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            Framwork
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
