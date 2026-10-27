    // Default poll: which section of the site is used the most
    const USAGE_POLL_OPTS = ["Campus Feed", "Crush Confessions", "Blood Donation Hub", "Buy & Sell Market", "DIU Jobs", "To-Let", "Lost & Found", "Campus Polls", "Connects", "Private Chats", "Global Chat", "Toppers", "Routine Calendar", "LoveZone"];
    function makeUsagePoll() {
      return {
        id: "p_usage", authorId: "u1", type: "poll",
        content: "Which section of the website do you use the most?",
        pollOptions: USAGE_POLL_OPTS.map(t => ({ text: t, votes: [] })),
        hypes: [], vuas: [], reactions: [], comments: [], repostsCount: 0, timestamp: "Just now"
      };
    }

    // --- CONSTANTS & INITIAL DATA ---
    const DEPARTMENTS = ["CSE", "SWE", "CIS", "MCT", "EEE", "ETE", "CE", "ARCH", "BBA", "Nursing", "Pharmacy", "Public Health", "Physiotherapy", "Law", "English", "Economics", "JMC", "Sociology", "Textile", "TE", "Fashion Design", "NFE", "GE", "THM", "ESDM", "Agriculture"];
    const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

    // Simulated Registered Users Database
    let registeredUsers = [
      {
        id: "u1",
        username: "sakib_cse",
        email: "sakib@diu.edu.bd",
        password: "demo123",
        studentId: "221-15-4821",
        name: "Al Sahariar Sakib",
        dept: "CSE",
        bloodGroup: "O+",
        isDonor: true,
        bio: "Full-stack developer & competitive programmer @ DIU.",
        connectedUserIds: ["u2"]
      },
      {
        id: "u2",
        username: "anika_swe",
        email: "anika@diu.edu.bd",
        password: "demo123",
        studentId: "222-35-1180",
        name: "Anika Tabassum",
        dept: "SWE",
        bloodGroup: "A+",
        isDonor: false,
        bio: "UI/UX enthusiast, coffee consumer, lab assistant.",
        connectedUserIds: ["u1"]
      },
      {
        id: "u3",
        username: "tanvir_bba",
        email: "tanvir@diu.edu.bd",
        password: "demo123",
        studentId: "211-10-0932",
        name: "Tanvir Rahman",
        dept: "BBA",
        bloodGroup: "B+",
        isDonor: true,
        bio: "Campus entrepreneur & event management lead.",
        connectedUserIds: []
      }
    ];

    let currentUser = registeredUsers[0];

    // Seed Posts Database
    let posts = [
      {
        id: "p1",
        authorId: "u1",
        type: "regular",
        content: "Fall semester midterm exam routine has been published! Make sure all fees are cleared to collect admit cards from office.",
        image: null,
        isConfessionAnonymous: false,
        hypes: [{ userId: "u2", count: 12 }, { userId: "u3", count: 5 }],
        vuas: [{ userId: "u3", count: 1 }],
        reactions: [{ userId: "u2", type: "Love" }],
        comments: [
          { id: "c1", userId: "u2", text: "Thanks for the reminder! Ready for midterms.", audio: null, image: null, time: "15m ago" }
        ],
        repostsCount: 4,
        timestamp: "1h ago"
      },
      {
        id: "p2",
        authorId: "u2",
        type: "confession",
        content: "To the student wearing the dark green hoodie near AB4 Coffee Shop around 3 PM today: your vibe was immaculate",
        image: null, // Text only rule for confessions
        isConfessionAnonymous: true,
        hypes: [{ userId: "u1", count: 24 }],
        vuas: [{ userId: "u3", count: 3 }],
        reactions: [{ userId: "u1", type: "Love" }, { userId: "u3", type: "Haha" }],
        comments: [],
        repostsCount: 2,
        timestamp: "2h ago"
      },
      makeUsagePoll(),
      {
        id: "p4",
        authorId: "u1",
        type: "lost_found",
        content: "Found a black scientific calculator (Casio 991EX) in AB3 5th floor Lab 504.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        hypes: [{ userId: "u2", count: 3 }],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 5,
        timestamp: "Yesterday"
      },
      {
        id: "p5",
        authorId: "u2",
        type: "blood",
        bloodGroup: "O+",
        location: "Enam Medical College Hospital, Savar",
        contact: "01711223344",
        content: "Urgent 2 bags of O+ Blood needed tomorrow at 9 AM for surgery.",
        hypes: [{ userId: "u1", count: 15 }],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 18,
        timestamp: "3h ago"
      },
      {
        id: "p6",
        authorId: "u3",
        type: "marketplace",
        title: "Logitech Wireless Mouse M185",
        price: "650 BDT",
        isSold: false,
        contact: "01822334455",
        content: "Lightly used for 2 months. Works flawlessly with fresh battery included.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
        hypes: [{ userId: "u1", count: 2 }],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 0,
        timestamp: "6h ago"
      },
      {
        id: "p7",
        authorId: "u3",
        type: "job",
        title: "Campus Brand Ambassador",
        company: "DIU Business Club",
        jobType: "Part-time",
        location: "DIU Permanent Campus",
        salary: "3,000 BDT / month",
        content: "Help us promote club events across departments. Flexible hours around your class routine. Good communication skills required.",
        isClosed: false,
        hypes: [], vuas: [], reactions: [], comments: [], repostsCount: 0,
        timestamp: "5h ago"
      },
      {
        id: "p8",
        authorId: "u1",
        type: "job",
        title: "Junior React Developer (Intern)",
        company: "Startup Project (Remote)",
        jobType: "Internship",
        location: "Remote",
        salary: "Unpaid, certificate + experience",
        content: "Looking for 2 students who know HTML, CSS and basic React to help build a campus tool. Message me with your GitHub link.",
        isClosed: false,
        hypes: [], vuas: [], reactions: [], comments: [], repostsCount: 0,
        timestamp: "1d ago"
      },
      {
        id: "p9",
        authorId: "u3",
        type: "tolet",
        title: "Bachelor room near DIU Permanent Campus",
        toletType: "Bachelor",
        location: "Ashulia, Savar",
        rent: "4,500 BDT / month",
        beds: "1 room, shared bath",
        availableFrom: "1 Nov",
        content: "Furnished room with bed, table and wifi. Gas and water included. 5 minutes from campus gate. Message me to visit.",
        isClosed: false,
        hypes: [], vuas: [], reactions: [], comments: [], repostsCount: 0,
        timestamp: "3h ago"
      }
    ];

    let pendingConnectRequests = [];
    let globalChatMessages = [
      { id: "g1", userId: "u2", text: "Hey DIU family! Is the central library open today?", audio: null, image: null, time: "10:30 AM" },
      { id: "g2", userId: "u1", text: "Yes Anika, open till 8 PM today.", audio: null, image: null, time: "10:32 AM" }
    ];
    let privateMessages = {
      "u1_u2": [
        { senderId: "u1", text: "Hey! Did you get the lecture slides for SWE312?", audio: null, image: null, time: "Yesterday" },
        { senderId: "u2", text: "Yes! Sending them over shortly.", audio: null, image: null, time: "Yesterday" }
      ]
    };

    // State Variables
    let moreMenuOpen = false;
    let activeTab = "feed"; // feed, confessions, blood, marketplace, lostfound, polls, chat, connect, profile
    let selectedChatUser = null;
    let hypeAuditModalPostId = null;
    let pollVotersModal = null; // { postId, optIdx }
    let viewProfileId = null;   // other user's profile currently open
    let profileReturnTab = "feed";
    let jobFilter = "All";
    let chatDraft = "";        // prefilled DM text (e.g. from a job post)
    let opinionBoxPostId = null;
    let vuaAuditModalPostId = null;
    let reactionAuditModalPostId = null;
    let bloodFilterGroup = "ALL";
    let activeAuthMode = null;
    let authMode = "home"; // home | login | register
    let openReactPostId = null;
    let profileEditing = false;
    let chatPendingImage = null;
    let rTimer = null, rLong = false, rHover = null;
    const CREATOR_ID = "u1";
    let creatorHype = { total: 0, byUser: {} }; // everyone can hype the creator, unlimited
    let lz = { members: {}, interests: [], proposals: [], passes: {}, msgs: {}, seeded: false };
    let lzTab = "discover", lzChat = null, lzProposeTo = null, lzEditing = false;

    // Persistence (browser only)
    (function loadState() {
      try {
        const s = JSON.parse(localStorage.getItem("diuHubV2") || "null");
        if (!s) return;
        registeredUsers = s.users; posts = s.posts; pendingConnectRequests = s.req;
        globalChatMessages = s.chat; privateMessages = s.dm;
        currentUser = registeredUsers.find(u => u.id === s.me) || registeredUsers[0];
        if (s.ch) creatorHype = s.ch;
        if (s.lz) lz = s.lz;
      } catch (_) {}
    })();

    let _saveT = null;
    // one-time: remove old polls and keep only the "most used section" poll
    (function () {
      try {
        if (localStorage.getItem("diuPollV3")) return;
        posts = posts.filter(p => p.type !== "poll");
        posts.unshift(makeUsagePoll());
        localStorage.setItem("diuPollV3", "1");
      } catch (_) {}
    })();

    function saveState() {
      clearTimeout(_saveT);
      _saveT = setTimeout(saveStateNow, 400);
    }
    window.addEventListener("pagehide", () => { if (_saveT) { clearTimeout(_saveT); saveStateNow(); } });
    document.addEventListener("visibilitychange", () => { if (document.hidden && _saveT) { clearTimeout(_saveT); saveStateNow(); } });
    function saveStateNow() {
      _saveT = null;
      try {
        localStorage.setItem("diuHubV2", JSON.stringify({
          users: registeredUsers,
          posts,
          req: pendingConnectRequests,
          chat: globalChatMessages,
          dm: privateMessages,
          ch: creatorHype,
          lz,
          gg: gossipGroups,
          me: currentUser ? currentUser.id : null
        }));
      } catch (_) {}
    }

    posts.forEach(p => {
      if (!p.reposts) p.reposts = registeredUsers.filter(u => u.id !== p.authorId).slice(0, Math.min(p.repostsCount || 0, 2)).map(u => ({ userId: u.id }));
    });

    document.addEventListener("click", ev => {
      if (!ev.target.closest("[data-react]")) hideTrays();
    });
    document.addEventListener("touchmove", ev => { if (rLong) ev.preventDefault(); }, { passive: false });

    // Helpers
    function getUserById(id) {
      return registeredUsers.find(u => u.id === id) || { name: "DIU Student", dept: "DIU", username: "student" };
    }

    function escapeHtml(v) {
      return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }

    // inline attributes that make a name / avatar open that user's profile
    function profileAttr(userId) {
      return userId ? `onclick="openUserProfile('${userId}')" role="link" title="View profile"` : "";
    }

    function deptBadge(dept) {
      if (!dept) return "";
      return `<span class="inline-block ml-1.5 px-1.5 py-[3px] rounded-md bg-darkText text-white text-[9px] leading-none font-extrabold uppercase tracking-wide align-middle">${dept}</span>`;
    }

    function getUserTag(user) {
      if (!user) return "Unknown user";
      return `${user.name}${deptBadge(user.dept)}`;
    }

    // --- SOUND EFFECTS (synthesized, no files) ---
    let _ac = null, _out = null;
    function playSfx(kind) {
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        _ac = _ac || new AC();
        if (_ac.state === "suspended") _ac.resume();
        if (!_out) { _out = _ac.createBiquadFilter(); _out.type = "lowpass"; _out.frequency.value = 5200; _out.Q.value = 0.4; _out.connect(_ac.destination); }
        const t0 = _ac.currentTime;
        const tone = (type, f1, f2, start, dur, vol, att) => {
          att = att || 0.012;
          const o = _ac.createOscillator(), g = _ac.createGain();
          o.type = type;
          o.frequency.setValueAtTime(f1, t0 + start);
          o.frequency.exponentialRampToValueAtTime(f2, t0 + start + dur);
          g.gain.setValueAtTime(0.0001, t0 + start);
          g.gain.exponentialRampToValueAtTime(vol, t0 + start + att);
          g.gain.exponentialRampToValueAtTime(0.0001, t0 + start + dur);
          o.connect(g); g.connect(_out);
          o.start(t0 + start); o.stop(t0 + start + dur + 0.02);
        };
        if (kind === "hype") { tone("sine", 600, 900, 0, 0.11, 0.16); tone("sine", 900, 1350, 0.08, 0.16, 0.14); }
        else if (kind === "vua") { tone("triangle", 380, 170, 0, 0.2, 0.18); tone("sine", 190, 110, 0.06, 0.18, 0.1); }
        // ---- reactions: soft, rounded sine tones that match each emoji ----
        else if (kind === "react" || kind === "react_like") { tone("sine", 523, 523, 0, 0.16, 0.3, 0.02); tone("sine", 784, 784, 0.07, 0.24, 0.26, 0.02); }
        else if (kind === "react_love") { tone("sine", 196, 150, 0, 0.14, 0.45, 0.02); tone("sine", 196, 150, 0.17, 0.18, 0.4, 0.02); tone("sine", 1047, 1047, 0.22, 0.3, 0.14, 0.03); }
        else if (kind === "react_haha") { tone("sine", 659, 740, 0, 0.09, 0.28, 0.01); tone("sine", 784, 880, 0.08, 0.09, 0.28, 0.01); tone("sine", 988, 1100, 0.16, 0.14, 0.28, 0.01); }
        else if (kind === "react_wow") { tone("sine", 330, 990, 0, 0.28, 0.3, 0.03); tone("sine", 1319, 1319, 0.16, 0.32, 0.14, 0.03); }
        else if (kind === "react_sad") { tone("sine", 440, 415, 0, 0.3, 0.26, 0.03); tone("sine", 349, 330, 0.2, 0.42, 0.26, 0.03); }
        else if (kind === "react_angry") { tone("triangle", 392, 262, 0, 0.16, 0.34, 0.015); tone("sine", 784, 524, 0, 0.16, 0.14, 0.015); tone("triangle", 370, 220, 0.17, 0.22, 0.34, 0.015); tone("sine", 740, 440, 0.17, 0.22, 0.14, 0.015); }
        else if (kind === "react_dislike") { tone("sine", 420, 260, 0, 0.2, 0.3, 0.02); tone("sine", 300, 200, 0.1, 0.22, 0.2, 0.02); }
        else if (kind === "react_off") { tone("sine", 700, 520, 0, 0.08, 0.18, 0.01); }
        // ---- actions ----
        else if (kind === "repost") {
          const len = Math.floor(_ac.sampleRate * 0.25), buf = _ac.createBuffer(1, len, _ac.sampleRate), d = buf.getChannelData(0);
          for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / len);
          const n = _ac.createBufferSource(), f = _ac.createBiquadFilter(), g = _ac.createGain();
          n.buffer = buf; f.type = "bandpass"; f.Q.value = 1.2;
          f.frequency.setValueAtTime(400, t0); f.frequency.exponentialRampToValueAtTime(2400, t0 + 0.22);
          g.gain.value = 0.09; n.connect(f); f.connect(g); g.connect(_out); n.start(t0); n.stop(t0 + 0.26);
          tone("sine", 440, 660, 0, 0.13, 0.2, 0.02); tone("sine", 660, 990, 0.1, 0.16, 0.2, 0.02);
        }
        else if (kind === "opinion") { tone("sine", 480, 720, 0, 0.1, 0.26, 0.015); tone("sine", 960, 960, 0.06, 0.16, 0.14, 0.02); }
        else if (kind === "reply") { tone("sine", 659, 659, 0, 0.1, 0.24, 0.015); tone("sine", 880, 880, 0.09, 0.18, 0.24, 0.015); }
        else if (kind === "send") { tone("sine", 440, 587, 0, 0.18, 0.2, 0.04); tone("sine", 880, 1175, 0.02, 0.18, 0.06, 0.05); }
        else if (kind === "publish") { tone("sine", 330, 660, 0, 0.16, 0.22, 0.03); tone("sine", 988, 988, 0.14, 0.5, 0.2, 0.02); tone("sine", 1480, 1480, 0.18, 0.42, 0.09, 0.02); }
        else if (kind === "liquid") {
          // water swish (filtered noise) + rising bubble "bloops"
          const len = Math.floor(_ac.sampleRate * 0.5), buf = _ac.createBuffer(1, len, _ac.sampleRate), d = buf.getChannelData(0);
          for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
          const n = _ac.createBufferSource(), f = _ac.createBiquadFilter(), g = _ac.createGain();
          n.buffer = buf; f.type = "bandpass"; f.Q.value = 3;
          f.frequency.setValueAtTime(300, t0); f.frequency.exponentialRampToValueAtTime(1400, t0 + 0.4);
          g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.07, t0 + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.45);
          n.connect(f); f.connect(g); g.connect(_ac.destination); n.start(t0); n.stop(t0 + 0.5);
          tone("sine", 280, 760, 0.02, 0.12, 0.2);
          tone("sine", 360, 980, 0.13, 0.11, 0.16);
          tone("sine", 480, 1250, 0.23, 0.1, 0.12);
        }
        else if (kind === "deny") { tone("square", 170, 140, 0, 0.09, 0.05); }
      } catch (_) {}
    }

    function hideTrays() {
      document.querySelectorAll("[id^='tray-']").forEach(el => el.classList.add("hidden"));
    }

    function calculateMetricsAndPersona(userId) {
      let reputation = 0;
      let hates = 0;

      posts.forEach(post => {
        if (post.authorId === userId) {
          (post.hypes || []).forEach(h => { reputation += h.count; });
          (post.vuas || []).forEach(v => { hates += v.count; });
        }
      });

      if (userId === CREATOR_ID) reputation += creatorHype.total;

      let persona = "Freshman Voice";
      if (reputation > 30 && hates < 5) persona = "Campus Legend";
      else if (reputation > 15) persona = "Rising Star";
      else if (hates > reputation) persona = "Controversial Figure";

      return { reputation, hates, persona };
    }

    // --- PURE VECTOR SVG ICONS ---
    const SVG = {
      search: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20l-3.5-3.5"/></svg>`,
      code: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/></svg>`,
      camera: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8a2 2 0 012-2h2l1.5-2h7L17 6h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/><circle cx="12" cy="13" r="3.5" stroke-width="2"/></svg>`,
      lovezone: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>`,
      logo: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
      feed: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>`,
      confession: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
      blood: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3s6.5 6.6 6.5 11.3A6.5 6.5 0 015.5 14.3C5.5 9.6 12 3 12 3z"/></svg>`,
      marketplace: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
      lostfound: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
      polls: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
      chat: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
      gossip: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 0A4 4 0 009 20h6a4 4 0 00-2-3.46zM15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
      connect: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>`,
      profile: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
      hypeStock: `<svg class="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
      vuaThumb: `<svg class="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/></svg>`,
      loveSvg: `<svg class="w-4 h-4 text-accentRed" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
      hahaSvg: `<svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>`,
      sadSvg: `<svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 5.5c.78-1.17 2.07-2 3.5-2s2.72.83 3.5 2H8.5z"/></svg>`,
      dislikeSvg: `<svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>`,
      repost: `<svg class="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
      image: `<svg class="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
      trophy: `<svg class="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8m-4-4v4m-5-18h10v5a5 5 0 01-10 0V3zm0 2H4v1a3 3 0 003 3m10-4h3v1a3 3 0 01-3 3"/></svg>`,
      mail: `<svg class="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      mic: `<svg class="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>`,
      pin: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21s-7-5.6-7-11a7 7 0 1114 0c0 5.4-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/></svg>`,
      phone: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.5 1.2l-1.6.8a11 11 0 005.4 5.4l.8-1.6a1 1 0 011.2-.5l3.3 1.1a1 1 0 01.7.95V19a2 2 0 01-2 2C9.7 21 3 14.3 3 6V5z"/></svg>`,
      calendar: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"/></svg>`,
      close: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6L6 18"/></svg>`,
      edit: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L19 9a2.8 2.8 0 00-4-4L4 16v4zM13.5 6.5l4 4"/></svg>`,
      logout: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>`,
      likeSvg: `<svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21h4V9H2v12zm20-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 1 6.59 7.59C6.22 7.95 6 8.45 6 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>`,
      likeOutline: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>`,
      wowSvg: `<svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zM12 13.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/></svg>`,
      angrySvg: `<svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-7.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S7 10.17 7 11s.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 5c.78-1.17 2.07-2 3.5-2s2.72.83 3.5 2H8.5z"/><path d="M6.5 7.5l3.5 1.5M17.5 7.5L14 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>`,
      home: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V10"/></svg>`,
      briefcase: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
      delete: `<svg class="w-4 h-4 text-accentRed" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`
    };


    // --- COLOURFUL ICONS (no background; palette hues, deepened where needed so they read on white) ---
    const ICON_COLOR = {
      feed:"#8FCB00", confession:"#EE585A", blood:"#CF1830", marketplace:"#E6B800",
      briefcase:"#B89A4A", home:"#8FCB00", lostfound:"#A77BEA", polls:"#E6B800",
      connect:"#A77BEA", mail:"#EE585A", chat:"#8FCB00", trophy:"#E6B800",
      calendar:"#8FCB00", gossip:"#EE585A", lovezone:"#CF1830", profile:"#A77BEA",
      search:"#A77BEA", code:"#A77BEA", camera:"#EE585A", pin:"#CF1830",
      phone:"#8FCB00", close:"#EE585A", edit:"#A77BEA", logout:"#CF1830",
      repost:"#8FCB00", image:"#A77BEA", mic:"#CF1830", delete:"#CF1830", likeOutline:"#A77BEA"
    };
    function colorify(svg, color) {
      return svg.replace(/^<svg([^>]*)>/, (m, attrs) => {
        attrs = attrs.replace(/\btext-[\w-]+/g, "");
        return `<svg${attrs} style="color:${color}">`;
      });
    }
    Object.keys(ICON_COLOR).forEach(k => { if (SVG[k]) SVG[k] = colorify(SVG[k], ICON_COLOR[k]); });

    const REACTIONS = [
      { type: "Like", icon: "likeSvg" }, { type: "Love", icon: "loveSvg" }, { type: "Haha", icon: "hahaSvg" },
      { type: "Wow", icon: "wowSvg" }, { type: "Sad", icon: "sadSvg" }, { type: "Angry", icon: "angrySvg" }
    ];
    const REACTION_ICON = { Like: "likeSvg", Love: "loveSvg", Haha: "hahaSvg", Wow: "wowSvg", Sad: "sadSvg", Angry: "angrySvg", Dislike: "dislikeSvg" };
    const REACTION_COLOR = { Like: "text-blue-600", Love: "text-accentRed", Haha: "text-amber-600", Wow: "text-amber-600", Sad: "text-amber-600", Angry: "text-orange-700", Dislike: "text-orange-700" };


    // --- TOP BAR (Facebook style) ---
    const TOPNAV = [
      ["feed", "Feed", `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11l9-8 9 8M5 9.5V20a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V9.5"/></svg>`],
      ["connect", "Connects", `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 10a4 4 0 100-8 4 4 0 000 8zM21 20v-2a4 4 0 00-3-3.87M16 2.13a4 4 0 010 7.75"/></svg>`],
      ["lovezone", "LoveZone", `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>`],
      ["dms", "Private Chats", `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/></svg>`],
      ["leaderboard", "Toppers", `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>`]
    ];

    (function () {
      const t = { feed:"feed", connect:"connect", lovezone:"lovezone", dms:"mail", leaderboard:"trophy" };
      TOPNAV.forEach(x => { const k = t[x[0]]; if (k) x[2] = colorify(x[2], ICON_COLOR[k]); });
    })();

    const HEADER_PAGES = [
      ["feed", "Campus Feed"], ["confessions", "Crush Confessions"], ["blood", "Blood Donation Hub"], ["marketplace", "Buy & Sell Market"],
      ["jobs", "DIU Jobs"], ["tolet", "To-Let"], ["lostfound", "Lost & Found"], ["polls", "Campus Polls"], ["connect", "Connects"],
      ["dms", "Private Chats"], ["chat", "Global Chat"], ["leaderboard", "Toppers"], ["routine", "Routine Calendar"],
      ["lovezone", "LoveZone"], ["profile", "My Profile"]
    ];

    function renderTopBar() {
      const tabs = TOPNAV.map(([id, label, icon]) => {
        const a = activeTab === id;
        return `<button onclick="switchTab('${id}')" title="${label}" aria-label="${label}" class="relative h-14 w-14 xl:w-20 flex items-center justify-center transition ${a ? 'text-darkText' : 'text-zinc-500 hover:text-darkText'}">
          <span class="relative inline-flex p-2.5 rounded-xl transition ${a ? '' : 'hover:bg-zinc-900/5'}">${icon}${navBadge(id, true)}</span>
          ${a ? '<span class="absolute bottom-0 inset-x-2 h-[3px] rounded-full bg-darkText"></span>' : ''}
        </button>`;
      }).join('');
      const roundBtn = 'w-10 h-10 rounded-full bg-zinc-900/5 hover:bg-zinc-900/10 flex items-center justify-center text-darkText transition';
      return `
        <header id="appHeader" class="${hsOpen ? 'hs-open ' : ''}relative z-30 shrink-0 h-14 bg-white/75 backdrop-blur-xl backdrop-saturate-150 border-b border-white/60 shadow-[0_1px_0_rgba(24,23,22,0.06)] px-3 sm:px-4 flex items-center justify-between gap-2 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div class="flex items-center gap-2 min-w-0 flex-1 lg:flex-none">
            <button onclick="switchTab('feed')" aria-label="Home" class="w-10 h-10 shrink-0 rounded-full bg-darkText text-accentLime flex items-center justify-center shadow-md">${SVG.logo}</button>
            <button id="hsIconBtn" onclick="hsToggle(true)" title="Search" aria-label="Search" class="${roundBtn} sm:hidden shrink-0">${SVG.search}</button>
            <div id="hsWrap" class="relative flex-1 min-w-0 max-w-[280px]">
              <div class="flex items-center gap-2 h-10 px-3 rounded-full bg-zinc-900/5 focus-within:bg-white transition">
                <span class="text-zinc-500 shrink-0">${SVG.search}</span>
                <input id="hsInput" type="search" autocomplete="off" placeholder="Search" oninput="headerSearch(this.value)" onfocus="headerSearch(this.value)" class="w-full min-w-0 bg-transparent outline-none text-sm sm:text-xs font-semibold placeholder:text-zinc-500">
                <button type="button" onclick="hsToggle(false)" aria-label="Close search" class="sm:hidden shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-zinc-500">${SVG.close}</button>
              </div>
              <div id="hsResults" class="hidden absolute left-0 top-12 w-[min(92vw,340px)] max-h-[70vh] overflow-y-auto custom-scrollbar bg-white/90 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl p-1.5 z-50"></div>
            </div>
          </div>
          <nav class="hidden lg:flex items-center justify-center">${tabs}</nav>
          <div class="hs-hide-m flex items-center gap-2 shrink-0 lg:justify-end">
            ${renderNotifBell(roundBtn)}
            <button onclick="switchTab('chat')" title="Global Chat" aria-label="Global Chat" class="${roundBtn} ${activeTab === 'chat' ? '!bg-darkText !text-white' : ''}">${SVG.chat}</button>
            <button onclick="switchTab('profile')" title="My Profile" aria-label="My Profile" class="rounded-full ${activeTab === 'profile' ? 'ring-2 ring-darkText' : ''}">${avatarHtml(currentUser, 'w-10 h-10 text-sm')}</button>
          </div>
        </header>`;
    }

    let hsOpen = false; // phone: search is just an icon until tapped
    function hsToggle(open) {
      hsOpen = open;
      const h = document.getElementById("appHeader");
      if (h) h.classList.toggle("hs-open", open);
      const i = document.getElementById("hsInput");
      if (open) { if (i) setTimeout(() => i.focus(), 30); }
      else { if (i) i.value = ""; headerSearch(""); }
    }

    function headerSearch(q) {
      const box = document.getElementById("hsResults");
      if (!box) return;
      q = (q || "").trim().toLowerCase();
      if (!q) { box.classList.add("hidden"); box.innerHTML = ""; return; }
      const users = registeredUsers.filter(u => ((u.name || "") + " " + (u.username || "") + " " + (u.dept || "")).toLowerCase().includes(q)).slice(0, 6);
      const pages = HEADER_PAGES.filter(p => p[1].toLowerCase().includes(q)).slice(0, 4);
      const head = t => `<p class="px-2.5 pt-2 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">${t}</p>`;
      let html = "";
      if (users.length) {
        html += head("People") + users.map(u => `
          <button onclick="hsGo('user','${u.id}')" class="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-zinc-100 text-left transition">
            ${avatarHtml(u, 'w-9 h-9 text-sm')}
            <span class="min-w-0"><span class="block font-bold text-xs text-darkText truncate">${escapeHtml(u.name)}</span><span class="block text-[10px] text-zinc-500 font-semibold truncate">@${escapeHtml(u.username)} &bull; ${escapeHtml(u.dept || '')}</span></span>
          </button>`).join("");
      }
      if (pages.length) {
        html += head("Pages") + pages.map(p => `
          <button onclick="hsGo('tab','${p[0]}')" class="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-zinc-100 text-left text-xs font-bold text-zinc-700 transition">
            <span class="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">${SVG.search}</span>${p[1]}
          </button>`).join("");
      }
      if (!html) html = `<p class="text-xs text-zinc-400 font-bold text-center py-5">No results for "${escapeHtml(q)}"</p>`;
      box.innerHTML = html;
      box.classList.remove("hidden");
    }

    function hsGo(kind, id) {
      const inp = document.getElementById("hsInput");
      if (inp) inp.value = "";
      const box = document.getElementById("hsResults");
      if (box) { box.classList.add("hidden"); box.innerHTML = ""; }
      hsOpen = false;
      if (kind === "user") openUserProfile(id); else switchTab(id);
    }
    document.addEventListener("click", ev => {
      if (ev.target.closest && ev.target.closest("#hsWrap, #hsIconBtn")) return;
      const box = document.getElementById("hsResults");
      if (box) box.classList.add("hidden");
      const hi = document.getElementById("hsInput");
      if (hsOpen && hi && !hi.value.trim()) hsToggle(false);
    });

    // --- PROFILE PICTURE ---
    let profPendingAvatar; // undefined = unchanged, null = remove, string = new image
    function resizeAvatar(file, cb) {
      if (!file) return;
      if (!/^image\//.test(file.type)) { showToast("Please select an image file"); return; }
      if (file.size > 15 * 1024 * 1024) { showToast("Image is too large (max 15MB)"); return; }
      const reader = new FileReader();
      reader.onerror = () => showToast("Couldn't read the image, please try again");
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          const size = 320, c = document.createElement("canvas");
          c.width = size; c.height = size;
          const ctx = c.getContext("2d");
          const side = Math.min(img.width, img.height);
          ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, size, size);
          ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, size, size);
          try { cb(c.toDataURL("image/jpeg", 0.85)); } catch (_) { showToast("Couldn't process this image"); }
        };
        img.onerror = () => showToast("This image can't be opened");
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    function paintProfAvatarPreview() {
      const el = document.getElementById("profAvatarPrev");
      if (!el) return;
      const shown = profPendingAvatar === undefined ? currentUser.avatar : profPendingAvatar;
      el.innerHTML = shown
        ? `<img src="${shown}" alt="Profile picture" class="w-full h-full object-cover">`
        : `<span class="font-black text-2xl">${escapeHtml((currentUser.name || "?").charAt(0).toUpperCase())}</span>`;
      const rm = document.getElementById("profAvatarRemove");
      if (rm) rm.classList.toggle("hidden", !shown);
    }
    function handleProfileAvatarSelect(ev) {
      const file = ev.target.files && ev.target.files[0];
      ev.target.value = "";
      resizeAvatar(file, data => { profPendingAvatar = data; paintProfAvatarPreview(); });
    }
    function removeProfileAvatar() { profPendingAvatar = null; paintProfAvatarPreview(); }
    function quickAvatarUpload(ev) {
      const file = ev.target.files && ev.target.files[0];
      ev.target.value = "";
      resizeAvatar(file, data => { currentUser.avatar = data; renderApp(); showToast("Profile picture updated"); });
    }
    function squareAvatar(user, cls) {
      const ch = ((user && user.name) || "?").charAt(0).toUpperCase();
      if (user && user.avatar) return `<img src="${user.avatar}" alt="" class="${cls} object-cover">`;
      return `<div class="${cls} bg-darkText text-white flex items-center justify-center font-black">${escapeHtml(ch)}</div>`;
    }


    // --- SMOOTH DOM PATCHER (updates only what changed; keeps focus, typed text, scroll, images) ---
    function morphChildren(from, to) {
      const f = Array.from(from.childNodes), t = Array.from(to.childNodes);
      const n = Math.max(f.length, t.length);
      for (let i = 0; i < n; i++) {
        const a = f[i], b = t[i];
        if (!b) { from.removeChild(a); continue; }
        if (!a) { from.appendChild(b); continue; }
        morphNode(a, b, from);
      }
    }
    function morphNode(a, b, parent) {
      if (a.nodeType !== b.nodeType || a.nodeName !== b.nodeName) { parent.replaceChild(b, a); return; }
      if (a.nodeType === 3 || a.nodeType === 8) { if (a.nodeValue !== b.nodeValue) a.nodeValue = b.nodeValue; return; }
      // attributes
      for (const at of Array.from(a.attributes)) if (!b.hasAttribute(at.name)) a.removeAttribute(at.name);
      for (const at of Array.from(b.attributes)) if (a.getAttribute(at.name) !== at.value) a.setAttribute(at.name, at.value);
      const tag = a.nodeName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        const focused = document.activeElement === a;
        if (tag === "INPUT" && (a.type === "checkbox" || a.type === "radio")) { a.checked = b.checked; return; }
        if (tag === "INPUT" && a.type === "file") return;
        if (!focused && a.value !== b.value && tag !== "SELECT") a.value = b.value;
        if (tag === "SELECT" && !focused) { for (let i = 0; i < b.options.length; i++) if (a.options[i] && a.options[i].selected !== b.options[i].selected) a.options[i].selected = b.options[i].selected; }
        if (tag === "TEXTAREA") { if (!focused && a.value !== b.value) a.value = b.value; return; }
        return;
      }
      if (tag === "IMG" || tag === "VIDEO" || tag === "AUDIO") return; // src already synced via attributes
      if (tag === "SVG" || tag === "svg") { if (a.innerHTML !== b.innerHTML) a.innerHTML = b.innerHTML; return; }
      morphChildren(a, b);
    }
    function patchHTML(container, html) {
      const tmp = document.createElement("div");
      tmp.innerHTML = html;
      morphChildren(container, tmp);
    }


    // --- GSAP: tab-enter animation (falls back to CSS fade if GSAP or motion is unavailable) ---
    function animateTabIn(main) {
      if (!main || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      main.classList.remove("animate-fadeIn");
      let items = Array.from(main.children);
      if (items.length === 1) items = Array.from(items[0].children);
      items = items.filter(el => el.nodeType === 1).slice(0, 14);
      if (!items.length) return;
      gsap.killTweensOf(items);
      gsap.fromTo(items, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: .5, ease: "power3.out", stagger: .045, clearProps: "opacity,visibility,transform" });
    }


    // --- ENTRANCE FX: count-up numbers + growing bars (runs once per element / per user) ---
    function runEntranceFx(root) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      root.querySelectorAll("[data-countup]").forEach(el => {
        const key = el.dataset.cukey || "";
        if (el._cuKey === key) return;
        el._cuKey = key;
        const to = Number(el.dataset.countup) || 0;
        if (reduced || !to) return;
        const o = { v: 0 }; el.textContent = "0";
        const set = () => { el.textContent = Math.round(o.v); };
        if (window.gsap) { gsap.to(o, { v: to, duration: 1.4, ease: "power2.out", onUpdate: set, onComplete: () => { el.textContent = to; } }); }
        else { const t0 = performance.now(); (function f(t) { const k = Math.min(1, (t - t0) / 1400); o.v = to * (1 - Math.pow(1 - k, 3)); set(); if (k < 1) requestAnimationFrame(f); else el.textContent = to; })(t0); }
      });
      root.querySelectorAll("[data-grow]").forEach(el => {
        const key = el.dataset.cukey || "x";
        if (el._growKey === key) return;
        el._growKey = key;
        if (reduced) return;
        const to = el.dataset.grow;
        el.style.width = "0%"; void el.offsetWidth; el.style.width = to + "%";
      });
    }


    // --- NOTIFICATIONS ---
    let notifOpen = false, notifSnap = 0;
    const repKey = () => "diuRepSeen_" + currentUser.id;
    function repSeen(cur) { let v = null; try { v = localStorage.getItem(repKey()); } catch (_) {} if (v === null) { try { localStorage.setItem(repKey(), cur); } catch (_) {} return cur; } return Number(v) || 0; }
    function notifData() {
      const cur = calculateMetricsAndPersona(currentUser.id).reputation;
      const reqs = pendingConnectRequests.filter(r => r.toUserId === currentUser.id);
      const gain = notifOpen ? notifSnap : Math.max(0, cur - repSeen(cur));
      const lzN = typeof lzBadgeCount === "function" ? lzBadgeCount() : 0;
      return { cur, reqs, gain, lzN, count: reqs.length + lzN + (gain > 0 ? 1 : 0) };
    }
    function toggleNotif() {
      const d = notifData();
      notifOpen = !notifOpen;
      if (notifOpen) { notifSnap = d.gain; try { localStorage.setItem(repKey(), d.cur); } catch (_) {} }
      renderApp();
    }
    document.addEventListener("click", ev => { if (notifOpen && !(ev.target.closest && ev.target.closest("#notifWrap"))) { notifOpen = false; renderApp(); } });
    function renderNotifBell(roundBtn) {
      const d = notifData();
      const row = (icon, text, act) => `<button onclick="${act}" class="w-full flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-zinc-100 text-left transition"><span class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">${icon}</span><span class="text-xs font-bold text-darkText">${text}</span></button>`;
      let items = d.reqs.map(r => { const u = getUserById(r.fromUserId); return row(SVG.connect, escapeHtml(u.name) + " wants to connect", "notifOpen=false;switchTab('connect')"); }).join("");
      if (d.gain > 0) items += row(SVG.hypeStock, "You earned +" + d.gain + " reputation", "notifOpen=false;switchTab('profile')");
      if (d.lzN) items += row(SVG.lovezone, d.lzN + " new in LoveZone", "notifOpen=false;switchTab('lovezone')");
      if (!items) items = '<div class="py-7 text-center"><div class="mx-auto w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 mb-2">' + SVG.mail + '</div><p class="text-xs font-extrabold text-zinc-500">You\'re all caught up</p></div>';
      return `<div id="notifWrap" class="sm:relative">
        <button onclick="toggleNotif()" title="Notifications" aria-label="Notifications" class="${roundBtn} relative"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>${d.count && !notifOpen ? `<span class="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-accentRed text-white text-[9px] font-black flex items-center justify-center">${d.count}</span>` : ''}</button>
        ${notifOpen ? `<div class="notif-panel absolute left-2 right-2 top-[3.75rem] sm:left-auto sm:right-0 sm:top-12 sm:w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl p-1.5 z-50"><p class="px-2.5 pt-2 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Notifications</p>${items}</div>` : ''}
      </div>`;
    }

    // --- STREAK + LEVEL ---
    function levelFor(rep) { return rep >= 150 ? "Campus Legend" : rep >= 50 ? "Senior" : rep >= 10 ? "Sophomore" : "Freshman"; }
    function getStreak() {
      if (!currentUser) return 0;
      const k = "diuStreak_" + currentUser.id, day = new Date().toISOString().slice(0, 10);
      let o = { last: "", n: 0 };
      try { o = JSON.parse(localStorage.getItem(k)) || o; } catch (_) {}
      if (o.last !== day) {
        const gap = o.last ? Math.round((Date.parse(day) - Date.parse(o.last)) / 864e5) : 0;
        o = { last: day, n: gap === 1 ? o.n + 1 : 1 };
        try { localStorage.setItem(k, JSON.stringify(o)); } catch (_) {}
      }
      return o.n;
    }

    // --- Ctrl+K quick search ---
    document.addEventListener("keydown", ev => {
      if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") { const i = document.getElementById("hsInput"); if (i) { ev.preventDefault(); i.focus(); i.select(); } }
      if (ev.key === "Escape" && notifOpen) { notifOpen = false; renderApp(); }
    });

    // --- SKELETON LOADER (first load) ---
    function skeletonHtml() {
      return `<div class="h-14 bg-white border-b border-zinc-200"></div><div class="flex-1 p-4 space-y-3 max-w-2xl w-full mx-auto">${[0,1,2].map(() => '<div class="bg-white rounded-2xl border border-zinc-200 p-4 space-y-3"><div class="flex items-center gap-3"><div class="sk w-10 h-10 !rounded-full"></div><div class="flex-1 space-y-2"><div class="sk h-3 w-1/3"></div><div class="sk h-2.5 w-1/5"></div></div></div><div class="sk h-3 w-full"></div><div class="sk h-3 w-4/5"></div><div class="sk h-28 w-full"></div></div>').join('')}</div>`;
    }

    // --- MAIN RENDERER ---
    let lastRenderedTab = null;
    function renderApp() {
      const appEl = document.getElementById("app");
      if (!currentUser) { lastRenderedTab = null; appEl.innerHTML = renderAuthScreen(); if (authMode !== 'login' && authMode !== 'register') { try { authMatrixIntro(); } catch (_) {} } saveState(); return; }

      const prevMain = appEl.querySelector("main");
      const sameTab = lastRenderedTab === activeTab && !!prevMain;
      const mainTop = sameTab ? prevMain.scrollTop : 0;
      const winTop = sameTab ? window.scrollY : 0;
      const chatPrev = {};
      document.querySelectorAll("[data-chatscroll]").forEach(el => { chatPrev[el.id || "_"] = el.scrollHeight - el.clientHeight - el.scrollTop < 120; });
      const prevList = document.getElementById("opinionList");
      const listTop = prevList ? prevList.scrollTop : null;

      const tabChanged = lastRenderedTab !== activeTab;
      const html = `
        <!-- Top Navigation Bar -->
        ${renderTopBar()}

        <!-- Main Layout Split -->
        <div class="flex-1 flex overflow-hidden -mt-14">
          <!-- Sidebar Nav (Desktop) -->
          <aside class="w-60 xl:w-64 bg-white/75 backdrop-blur-sm border-r border-[#DDD5C8] p-3 pt-[4.5rem] hidden lg:flex flex-col justify-between shrink-0">
            <nav class="space-y-1 custom-scrollbar overflow-y-auto">
              ${renderProfileCard()}
              <p class="px-3 pt-3 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Posts</p>
              ${renderNavItem("feed", "Campus Feed", SVG.feed)}
              ${renderNavItem("confessions", "Crush Confessions", SVG.confession)}
              ${renderNavItem("blood", "Blood Donation Hub", SVG.blood)}
              ${renderNavItem("marketplace", "Buy & Sell Market", SVG.marketplace)}
              ${renderNavItem("jobs", "DIU Jobs", SVG.briefcase)}
              ${renderNavItem("tolet", "To-Let", SVG.home)}
              ${renderNavItem("lostfound", "Lost & Found Desk", SVG.lostfound)}
              ${renderNavItem("polls", "Campus Polls", SVG.polls)}
            </nav>
            <div class="pt-3 border-t border-zinc-100 flex items-center justify-center">
              <button onclick="openUserProfile(CREATOR_ID)" title="Created by Al Sahariar Sakib <knight/> - Dept. of CSE, DIU" aria-label="Creator" class="group flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-100 hover:bg-darkText hover:text-white text-zinc-500 transition">
                <span class="w-6 h-6 rounded-full bg-darkText group-hover:bg-white group-hover:text-darkText text-white flex items-center justify-center transition">${SVG.code}</span>
                <span class="flex items-center gap-1.5 opacity-70 group-hover:opacity-100">${SVG.hypeStock}${SVG.edit}</span>
              </button>
            </div>
          </aside>

          <!-- Dynamic Main Content -->
          <main class="flex-1 flex flex-col graph-bg overflow-y-auto custom-scrollbar p-3 pt-[4.5rem] pb-[4.75rem] sm:p-6 sm:pt-20 sm:pb-[4.75rem] lg:pb-6 animate-fadeIn">
            ${renderActiveTabContent()}
          </main>

          <!-- Right Sidebar (Desktop) -->
          <aside class="w-56 xl:w-64 bg-white/75 backdrop-blur-sm border-l border-[#DDD5C8] p-3 pt-[4.5rem] hidden lg:flex flex-col shrink-0">
            <nav class="space-y-1 custom-scrollbar overflow-y-auto">
              <p class="px-3 pt-3 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Social</p>
              ${renderNavItem("connect", "Connects", SVG.connect)}
              ${renderNavItem("dms", "Private Chats", SVG.mail)}
              ${renderNavItem("chat", "Global Chat", SVG.chat)}
              ${renderNavItem("gossip", "Gossip", SVG.gossip)}
              ${renderNavItem("leaderboard", "Toppers", SVG.trophy)}
              <p class="px-3 pt-3 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Tools</p>
              ${renderNavItem("routine", "Routine Calendar", SVG.calendar)}
              <p class="px-3 pt-3 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Dating</p>
              ${renderLoveNavItem()}
            </nav>
          </aside>
        </div>

        <!-- Bottom Navigation Bar (Mobile) -->
        <nav class="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/80 backdrop-blur-xl border-t border-[#DDD5C8] grid grid-cols-5 gap-1 px-2 pt-2" style="padding-bottom:max(0.5rem, env(safe-area-inset-bottom))">
          ${renderMobileNavItem("feed", SVG.feed, "Feed")}
          ${renderMobileNavItem("connect", SVG.connect, "Connects")}
          ${renderMobileNavItem("lovezone", SVG.lovezone, "LoveZone")}
          ${renderMobileNavItem("dms", SVG.mail, "Chats")}
          ${renderMobileMoreItem()}
        </nav>
        ${moreMenuOpen ? renderMoreSheet() : ''}

        <!-- Dynamic Modals -->
        ${hypeAuditModalPostId ? renderHypeAuditModal() : ''}
        ${pollVotersModal ? renderPollVotersModal() : ''}
        ${vuaAuditModalPostId ? renderVuaAuditModal() : ''}
        ${reactionAuditModalPostId ? renderReactionAuditModal() : ''}
        ${opinionBoxPostId ? renderOpinionBoxModal() : ''}
        ${profileEditing ? renderEditProfileModal() : ''}
      `;
      if (tabChanged || !prevMain) appEl.innerHTML = html; else patchHTML(appEl, html);
      const newMain = appEl.querySelector("main");
      if (newMain && sameTab) {
        newMain.classList.remove("animate-fadeIn"); // no flash when just updating the same screen
        newMain.scrollTop = mainTop;
        if (winTop) window.scrollTo(0, winTop);
      }
      const newList = document.getElementById("opinionList");
      if (newList && listTop !== null) newList.scrollTop = listTop;
      if (tabChanged) animateTabIn(newMain);
      runEntranceFx(appEl);
      lastRenderedTab = activeTab;
      document.querySelectorAll("[data-chatscroll]").forEach(el => { const k = el.id || "_"; if (tabChanged || !(k in chatPrev) || chatPrev[k]) el.scrollTop = el.scrollHeight; });
      saveState();
    }

    function navBadge(id, mobile) {
      if ((id !== "connect" && id !== "lovezone") || !currentUser) return "";
      const n = id === "lovezone" ? lzBadgeCount() : pendingConnectRequests.filter(r => r.toUserId === currentUser.id).length;
      if (!n) return "";
      return mobile
        ? `<span class="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-accentRed text-white text-[9px] font-black flex items-center justify-center">${n}</span>`
        : `<span class="ml-auto min-w-[18px] h-[18px] px-1 rounded-full bg-accentRed text-white text-[10px] font-black flex items-center justify-center">${n}</span>`;
    }

    function renderNavItem(id, label, iconSvg) {
      const active = activeTab === id;
      return `
        <button onclick="switchTab('${id}')" class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl font-bold text-xs transition ${active ? 'bg-darkText text-white shadow-sm' : 'hover:bg-zinc-100 text-zinc-700'}">
          ${iconSvg.replace('w-4 h-4','w-5 h-5')}
          <span>${label}</span>
          ${navBadge(id, false)}
        </button>
      `;
    }

    function renderMobileNavItem(id, iconSvg, label) {
      const active = activeTab === id && !moreMenuOpen;
      return `
        <button onclick="switchTab('${id}')" class="relative flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl min-w-0 ${active ? 'bg-darkText text-white' : 'text-zinc-600'}">
          ${iconSvg.replace('w-4 h-4','w-5 h-5')}
          <span class="text-[10px] font-bold leading-none truncate max-w-full">${label}</span>
          ${navBadge(id, true)}
        </button>
      `;
    }

    const MOBILE_PRIMARY_TABS = ["feed", "connect", "lovezone", "dms"];
    const MORE_ITEMS = [
      ["profile", "My Profile", "profile"],
      ["chat", "Global Chat", "chat"],
      ["gossip", "Gossip", "gossip"],
      ["leaderboard", "Toppers", "trophy"],
      ["confessions", "Confessions", "confession"],
      ["blood", "Blood Hub", "blood"],
      ["marketplace", "Market", "marketplace"],
      ["jobs", "DIU Jobs", "briefcase"],
      ["tolet", "To-Let", "home"],
      ["lostfound", "Lost & Found", "lostfound"],
      ["polls", "Polls", "polls"],
      ["routine", "Routine", "calendar"]
    ];

    function renderMobileMoreItem() {
      const active = moreMenuOpen || !MOBILE_PRIMARY_TABS.includes(activeTab);
      return `
        <button onclick="toggleMoreMenu()" aria-label="More" class="relative flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl min-w-0 ${active ? 'bg-darkText text-white' : 'text-zinc-600'}">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#EE585A"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <span class="text-[10px] font-bold leading-none">More</span>
        </button>
      `;
    }

    function renderMoreSheet() {
      return `
        <div class="lg:hidden fixed inset-0 z-40 bg-black/40 flex items-end animate-fadeIn" onclick="if(event.target===this) toggleMoreMenu()">
          <div class="w-full bg-white rounded-t-3xl p-4 shadow-2xl" style="padding-bottom:max(1rem, env(safe-area-inset-bottom))">
            <div class="w-10 h-1 rounded-full bg-zinc-300 mx-auto mb-3"></div>
            <div class="grid grid-cols-3 gap-2">
              ${MORE_ITEMS.map(([id, label, icon]) => `
                <button onclick="moreGo('${id}')" class="flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl text-[11px] font-bold ${activeTab === id ? 'bg-darkText text-white' : 'bg-zinc-100 text-zinc-700'}">
                  ${SVG[icon].replace('w-4 h-4','w-6 h-6')}
                  <span>${label}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function toggleMoreMenu() {
      moreMenuOpen = !moreMenuOpen;
      renderApp();
      const ic = document.querySelector('[aria-label="More"] svg');   // button was re-rendered, glitch the new icon
      if (ic) { ic.classList.remove("glitch-fx"); void ic.getBoundingClientRect(); ic.classList.add("glitch-fx"); setTimeout(() => ic.classList.remove("glitch-fx"), 520); }
    }
    function moreGo(tabId) {   // short delay so the tapped icon's glitch is visible before the sheet closes
      setTimeout(() => switchTab(tabId), 360);
    }

    function switchTab(tabId) {
      moreMenuOpen = false;
      if (voiceRec) finishVoice(false);
      selectedChatUser = null;
      viewProfileId = null;
      activeTab = tabId; lzChat = null; lzProposeTo = null; lzEditing = false;
      opinionBoxPostId = null;
      opinionReplyTo = null;
      chatPendingImage = null;
      postPendingImage = null;
      marketPendingImage = null;
      renderApp();
    }

    // --- TAB ROUTER ---
    function renderActiveTabContent() {
      switch (activeTab) {
        case "feed": return renderFeedSection();
        case "confessions": return renderConfessionsSection();
        case "blood": return renderBloodHubSection();
        case "marketplace": return renderMarketplaceSection();
        case "jobs": return renderJobsSection();
        case "tolet": return renderToLetSection();
        case "userprofile": return renderUserProfileSection();
        case "lostfound": return renderLostFoundSection();
        case "polls": return renderPollsSection();
        case "chat": return renderGlobalChatSection();
        case "gossip": return renderGossipSection();
        case "connect": return renderConnectSection();
        case "dms": return renderDmSection();
        case "leaderboard": return renderLeaderboardSection();
        case "routine": return renderRoutineSection();
        case "profile": return renderProfileSection();
        case "lovezone": return renderLoveZoneSection();
        default: return renderFeedSection();
      }
    }

    // --- SECTION 1: MAIN FEED ---
    function renderFeedSection() {
      const hypeOf = p => (p.hypes || []).reduce((n, h) => n + h.count, 0);
      const filteredPosts = posts
        .filter(p => p.type !== 'blood' && p.type !== 'marketplace' && p.type !== 'job' && p.type !== 'tolet')
        .map((p, i) => ({ p, i }))
        .sort((a, b) => hypeOf(b.p) - hypeOf(a.p) || a.i - b.i)
        .map(x => x.p);

      return `
        <div class="fullbleed self-stretch -mx-3 sm:mx-0 space-y-2 sm:space-y-4">
          ${renderPostCreatorCard("regular", "Share something with the DIU campus...", true)}

          <div class="space-y-2 sm:space-y-4">
            ${filteredPosts.length ? filteredPosts.map(p => renderPostCard(p)).join('') : `
              <div class="text-center py-12 bg-white rounded-2xl border border-zinc-200">
                <p class="text-xs text-zinc-500 font-medium">No posts in the main feed yet.</p>
              </div>
            `}
          </div>
        </div>
      `;
    }

    // --- SECTION 2: CRUSH CONFESSIONS ---
    function renderConfessionsSection() {
      const confessions = posts.filter(p => p.type === 'confession');

      return `
        <div class="fullbleed self-stretch -mx-3 sm:mx-0 space-y-2 sm:space-y-4">
          <h2 class="font-extrabold text-base text-darkText text-center py-1"><span class="inline-flex align-middle mr-1.5">${SVG.confession}</span>Crush Confessions</h2>

          <div class="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
            <textarea id="confessionInput" rows="3" placeholder="Write your campus confession..." class="w-full p-3 bg-white rounded-xl text-xs outline-none border border-zinc-200 focus:border-zinc-400 transition"></textarea>
            
            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center space-x-2 text-xs font-bold cursor-pointer text-zinc-700">
                <input type="checkbox" id="anonToggle" class="rounded accent-darkText" checked>
                <span>Post Anonymously</span>
              </label>

              <button onclick="submitConfessionPost()" class="px-4 py-2 bg-darkText text-white font-bold text-xs rounded-xl hover:bg-zinc-800 transition">
                Publish Confession
              </button>
            </div>
          </div>

          <div class="space-y-2 sm:space-y-4">
            ${confessions.map(p => renderPostCard(p)).join('')}
          </div>
        </div>
      `;
    }

    // --- SECTION 3: BLOOD DONATION HUB ---
    function renderBloodHubSection() {
      const bloodPosts = posts.filter(p => p.type === 'blood');
      const filteredDonors = bloodFilterGroup === "ALL" 
        ? registeredUsers.filter(u => u.isDonor)
        : registeredUsers.filter(u => u.isDonor && u.bloodGroup === bloodFilterGroup);

      return `
        <div class="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto w-full space-y-6">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-1">
            <div>
              <h2 class="font-extrabold text-base text-rose-950"><span class="inline-flex align-middle mr-1.5">${SVG.blood}</span>Emergency Blood Donation Hub</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Post medical requests and filter registered student donors.</p>
            </div>
            <button onclick="toggleBloodForm()" class="px-4 py-2 bg-accentRed text-white font-bold text-xs rounded-xl hover:bg-rose-700 transition shadow-sm">
              + Post Emergency Request
            </button>
          </div>

          <div id="bloodForm" class="hidden bg-white p-5 rounded-2xl border border-rose-200 space-y-3 animate-fadeIn">
            <h3 class="font-bold text-xs text-rose-900 uppercase tracking-wider">Urgent Blood Posting</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select id="bloodGroupReq" class="p-2.5 bg-zinc-50 rounded-xl text-xs font-bold outline-none border border-zinc-200">
                ${BLOOD_GROUPS.map(bg => `<option value="${bg}">${bg}</option>`).join('')}
              </select>
              <input type="text" id="bloodLocation" placeholder="Hospital / Location (e.g., Enam Medical)" class="p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
              <input type="text" id="bloodContact" placeholder="Contact Phone Number" class="p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200 sm:col-span-2">
            </div>
            <textarea id="bloodDetails" rows="2" placeholder="Patient condition and details..." class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200"></textarea>
            <button onclick="submitBloodPost()" class="px-4 py-2 bg-darkText text-white text-xs font-bold rounded-xl">Publish Request</button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-2 space-y-4">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-zinc-500">Urgent Requests</h3>
              ${bloodPosts.length ? bloodPosts.map(p => renderBloodCard(p)).join('') : '<p class="text-xs text-zinc-400">No active blood requests.</p>'}
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="font-extrabold text-xs uppercase tracking-wider text-zinc-500">Student Donors</h3>
                <select onchange="filterBloodGroup(this.value)" class="text-[11px] p-1.5 bg-white border border-zinc-200 rounded-xl font-bold">
                  <option value="ALL">All Groups</option>
                  ${BLOOD_GROUPS.map(bg => `<option value="${bg}" ${bloodFilterGroup === bg ? 'selected' : ''}>${bg}</option>`).join('')}
                </select>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-zinc-200 space-y-3">
                ${filteredDonors.length ? filteredDonors.map(d => `
                  <div class="flex items-center justify-between pb-2.5 border-b border-zinc-100 last:border-0">
                    <div>
                      <p class="font-bold text-xs text-darkText">${getUserTag(d)}</p>
                      <p class="text-[10px] text-zinc-500">Blood Group: <span class="font-extrabold text-accentRed">${d.bloodGroup}</span></p>
                    </div>
                    <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-md">Ready</span>
                  </div>
                `).join('') : '<p class="text-xs text-zinc-400">No registered donors for this group.</p>'}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // --- SECTION 4: BUY & SELL MARKETPLACE ---
    function renderMarketplaceSection() {
      const items = posts.filter(p => p.type === 'marketplace');

      return `
        <div class="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto w-full space-y-6">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-1">
            <div>
              <h2 class="font-extrabold text-base text-darkText"><span class="inline-flex align-middle mr-1.5">${SVG.marketplace}</span>Buy & Sell Campus Market</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Sell textbooks, gadgets, and everyday student accessories.</p>
            </div>
            <button onclick="toggleMarketForm()" class="px-4 py-2 bg-darkText text-white font-bold text-xs rounded-xl hover:bg-zinc-800 transition">
              + Sell an Item
            </button>
          </div>

          <div id="marketForm" class="hidden bg-white p-5 rounded-2xl border border-zinc-200 space-y-3 animate-fadeIn">
            <h3 class="font-bold text-xs uppercase tracking-wide text-zinc-700">Listing Info</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" id="mTitle" placeholder="Item Name (e.g., Engineering Mathematics Textbook)" class="p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
              <input type="text" id="mPrice" placeholder="Price (e.g., 400 BDT)" class="p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
              <input type="text" id="mContact" placeholder="Contact Phone / WhatsApp" class="p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200 sm:col-span-2">
            </div>
            <textarea id="mDesc" rows="2" placeholder="Item condition details..." class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200"></textarea>
            <div class="flex items-center gap-3 flex-wrap">
              ${photoButton('market')}
              <div id="imgPrev-market">${renderImgPreview('market')}</div>
            </div>
            <button onclick="submitMarketPost()" class="px-4 py-2 bg-darkText text-white text-xs font-bold rounded-xl">Publish Listing</button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            ${items.map(item => renderMarketCard(item)).join('')}
          </div>
        </div>
      `;
    }

    // --- SECTION: DIU JOBS ---
    const JOB_TYPES = ["Full-time", "Part-time", "Internship", "Freelance", "Tutoring", "On-campus"];

    function renderJobsSection() {
      const all = posts.filter(p => p.type === 'job');
      const list = jobFilter === 'All' ? all : all.filter(j => j.jobType === jobFilter);
      const chip = label => `<button onclick="setJobFilter('${label}')" class="shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold border transition ${jobFilter === label ? 'bg-darkText text-white border-darkText' : 'bg-white text-zinc-600 border-zinc-300 hover:bg-zinc-100'}">${label}</button>`;
      const field = 'p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200 focus:border-zinc-400';

      return `
        <div class="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full space-y-4">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-1">
            <div>
              <h2 class="font-extrabold text-base text-darkText"><span class="inline-flex align-middle mr-1.5">${SVG.briefcase}</span>DIU Jobs</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Post jobs, internships and gigs, or message the poster directly to apply.</p>
            </div>
            <button onclick="toggleJobForm()" class="px-4 py-2 bg-darkText text-white font-bold text-xs rounded-xl hover:bg-zinc-800 transition">+ Post a Job</button>
          </div>

          <div id="jobForm" class="hidden bg-white p-5 rounded-2xl border border-zinc-200 space-y-3 animate-fadeIn">
            <h3 class="font-bold text-xs uppercase tracking-wide text-zinc-700">Job Details</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" id="jTitle" maxlength="90" placeholder="Job title (e.g., Math Tutor for HSC student)" class="${field} sm:col-span-2">
              <input type="text" id="jCompany" maxlength="80" placeholder="Company / person / organization" class="${field}">
              <select id="jType" class="${field}">${JOB_TYPES.map(t => `<option value="${t}">${t}</option>`).join('')}</select>
              <input type="text" id="jLocation" maxlength="80" placeholder="Location (e.g., Ashulia, Remote, On campus)" class="${field}">
              <input type="text" id="jSalary" maxlength="60" placeholder="Salary / pay (optional)" class="${field}">
            </div>
            <textarea id="jDesc" rows="3" maxlength="1200" placeholder="What is the work? Requirements, timing, how to apply..." class="w-full ${field}"></textarea>
            <div class="flex items-center gap-2">
              <button onclick="submitJobPost()" class="px-4 py-2 bg-darkText text-white text-xs font-bold rounded-xl">Publish Job</button>
              <button onclick="toggleJobForm()" class="px-4 py-2 bg-white border border-zinc-300 text-xs font-bold rounded-xl hover:bg-zinc-100">Cancel</button>
            </div>
          </div>

          <div class="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
            ${chip('All')}${JOB_TYPES.map(chip).join('')}
          </div>

          ${list.length ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              ${list.map(renderJobCard).join('')}
            </div>` : `
            <div class="text-center py-12 bg-white rounded-2xl border border-zinc-200">
              <p class="text-xs text-zinc-500 font-medium">${all.length ? 'No jobs in this category yet.' : 'No jobs posted yet. Be the first to post one!'}</p>
            </div>`}
        </div>
      `;
    }

    function renderJobCard(job) {
      const poster = getUserById(job.authorId);
      const isOwner = job.authorId === currentUser.id;
      const e = escapeHtml;
      const meta = (icon, text) => `<span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-zinc-100 border border-zinc-200 [&_svg]:w-3.5 [&_svg]:h-3.5">${icon}${e(text)}</span>`;

      return `
        <div class="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm space-y-3 ${job.isClosed ? 'opacity-70' : ''}">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <h4 class="font-extrabold text-sm text-darkText break-words">${e(job.title)}</h4>
              ${job.company ? `<p class="text-xs font-semibold text-zinc-600 mt-0.5 break-words">${e(job.company)}</p>` : ''}
            </div>
            <span class="shrink-0 px-2 py-1 rounded-md ${job.isClosed ? 'bg-zinc-300 text-zinc-700' : 'bg-darkText text-white'} text-[10px] font-extrabold uppercase tracking-wide">${job.isClosed ? 'Filled' : e(job.jobType || 'Job')}</span>
          </div>
          <div class="flex flex-wrap gap-1.5 text-[11px] font-bold text-zinc-600">
            ${job.location ? meta(SVG.pin, job.location) : ''}
            ${job.salary ? meta('', job.salary) : ''}
            ${job.isClosed && job.jobType ? meta('', job.jobType) : ''}
          </div>
          <p class="text-xs text-zinc-700 leading-relaxed whitespace-pre-line break-words">${e(job.content)}</p>

          <div class="pt-3 border-t border-zinc-100 space-y-2">
            <div class="flex items-center gap-2 text-[10px] text-zinc-500 font-medium">
              ${avatarHtml(poster, 'w-6 h-6 text-[10px]', true)}
              <span ${profileAttr(poster.id)} class="font-bold text-darkText cursor-pointer hover:underline">${getUserTag(poster)}</span>
              <span>&bull; ${job.timestamp || ''}</span>
            </div>
            ${isOwner ? `
              <div class="flex items-center gap-2">
                <button onclick="toggleJobClosed('${job.id}')" class="flex-1 py-1.5 rounded-lg ${job.isClosed ? 'bg-zinc-200 text-zinc-700' : 'bg-emerald-100 text-emerald-800'} text-[11px] font-bold">${job.isClosed ? 'Reopen job' : 'Mark as filled'}</button>
                <button onclick="deletePost('${job.id}')" class="p-1.5 hover:bg-rose-50 rounded-lg transition" title="Delete job">${SVG.delete}</button>
              </div>
            ` : (job.isClosed
              ? `<p class="text-[11px] font-bold text-zinc-400 text-center py-1">This position has been filled.</p>`
              : `<button onclick="messageAboutJob('${job.id}')" class="w-full py-2 rounded-lg bg-darkText text-white text-[11px] font-bold flex items-center justify-center gap-1.5 hover:bg-zinc-800 transition [&_svg]:text-white">${SVG.chat}<span>Message poster</span></button>`)}
          </div>
        </div>
      `;
    }

    function toggleJobForm() {
      const el = document.getElementById("jobForm");
      if (el) el.classList.toggle("hidden");
    }

    function setJobFilter(label) { jobFilter = label; renderApp(); }

    function submitJobPost() {
      const val = id => { const el = document.getElementById(id); return el ? el.value.trim() : ""; };
      const title = val("jTitle"), desc = val("jDesc");
      if (!title || !desc) { showToast("Please add a job title and description"); return; }
      playSfx("publish"); posts.unshift({
        id: "p_" + Date.now(),
        authorId: currentUser.id,
        type: "job",
        title,
        company: val("jCompany"),
        jobType: val("jType") || "Part-time",
        location: val("jLocation"),
        salary: val("jSalary"),
        content: desc,
        isClosed: false,
        hypes: [], vuas: [], reactions: [], comments: [], repostsCount: 0,
        timestamp: "Just now"
      });
      jobFilter = "All";
      renderApp();
      showToast("Job posted");
    }

    function toggleJobClosed(jobId) {
      const job = posts.find(p => p.id === jobId);
      if (!job || job.authorId !== currentUser.id) return;
      job.isClosed = !job.isClosed;
      renderApp();
    }

    function messageAboutJob(jobId) {
      const job = posts.find(p => p.id === jobId);
      if (!job) return;
      chatDraft = `Hi! I'm interested in the "${job.title}" opportunity you posted on DIU Jobs.`;
      messageUser(job.authorId);
    }

    // --- TO-LET ---
    const TOLET_TYPES = ["Bachelor", "Family", "Mess / Seat", "Sublet", "Hostel"];
    let toletFilter = "All";

    function renderToLetSection() {
      const all = posts.filter(p => p.type === 'tolet');
      const list = toletFilter === 'All' ? all : all.filter(j => j.toletType === toletFilter);
      const chip = label => `<button onclick="setToLetFilter('${label}')" class="shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold border transition ${toletFilter === label ? 'bg-darkText text-white border-darkText' : 'bg-white text-zinc-600 border-zinc-300 hover:bg-zinc-100'}">${label}</button>`;
      const field = 'p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200 focus:border-zinc-400';
      return `
        <div class="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full space-y-4">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-1">
            <div>
              <h2 class="font-extrabold text-base text-darkText"><span class="inline-flex align-middle mr-1.5">${SVG.home}</span>To-Let</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Find or post rooms, mess seats and flats near DIU. Message the owner directly.</p>
            </div>
            <button onclick="toggleToLetForm()" class="px-4 py-2 bg-darkText text-white font-bold text-xs rounded-xl hover:bg-zinc-800 transition">+ Post To-Let</button>
          </div>

          <div id="toletForm" class="hidden bg-white p-5 rounded-2xl border border-zinc-200 space-y-3 animate-fadeIn">
            <h3 class="font-bold text-xs uppercase tracking-wide text-zinc-700">To-Let Details</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" id="tTitle" maxlength="90" placeholder="Title (e.g., Single room near campus)" class="${field} sm:col-span-2">
              <select id="tType" class="${field}">${TOLET_TYPES.map(t => `<option value="${t}">${t}</option>`).join('')}</select>
              <input type="text" id="tLocation" maxlength="80" placeholder="Location (e.g., Ashulia, Savar)" class="${field}">
              <input type="text" id="tRent" maxlength="60" placeholder="Rent (e.g., 5,000 BDT / month)" class="${field}">
              <input type="text" id="tBeds" maxlength="60" placeholder="Rooms / bath (optional)" class="${field}">
              <input type="text" id="tAvail" maxlength="40" placeholder="Available from (optional)" class="${field} sm:col-span-2">
            </div>
            <textarea id="tDesc" rows="3" maxlength="1200" placeholder="Facilities, rules, nearest landmark, who can rent..." class="w-full ${field}"></textarea>
            <div class="flex items-center gap-2">
              <button onclick="submitToLetPost()" class="px-4 py-2 bg-darkText text-white text-xs font-bold rounded-xl">Publish</button>
              <button onclick="toggleToLetForm()" class="px-4 py-2 bg-white border border-zinc-300 text-xs font-bold rounded-xl hover:bg-zinc-100">Cancel</button>
            </div>
          </div>

          <div class="flex gap-2 overflow-x-auto custom-scrollbar pb-1">${chip('All')}${TOLET_TYPES.map(chip).join('')}</div>

          ${list.length ? `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">${list.map(renderToLetCard).join('')}</div>` : `
            <div class="text-center py-12 bg-white rounded-2xl border border-zinc-200">
              <p class="text-xs text-zinc-500 font-medium">${all.length ? 'Nothing in this category yet.' : 'No To-Let posts yet. Be the first to post one!'}</p>
            </div>`}
        </div>
      `;
    }

    function renderToLetCard(t) {
      const poster = getUserById(t.authorId);
      const isOwner = t.authorId === currentUser.id;
      const e = escapeHtml;
      const meta = (icon, text) => `<span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-zinc-100 border border-zinc-200 [&_svg]:w-3.5 [&_svg]:h-3.5">${icon}${e(text)}</span>`;
      return `
        <div class="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm space-y-3 ${t.isClosed ? 'opacity-70' : ''}">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <h4 class="font-extrabold text-sm text-darkText break-words">${e(t.title)}</h4>
              ${t.rent ? `<p class="text-xs font-bold text-emerald-700 mt-0.5">${e(t.rent)}</p>` : ''}
            </div>
            <span class="shrink-0 px-2 py-1 rounded-md ${t.isClosed ? 'bg-zinc-300 text-zinc-700' : 'bg-darkText text-white'} text-[10px] font-extrabold uppercase tracking-wide">${t.isClosed ? 'Rented' : e(t.toletType || 'To-Let')}</span>
          </div>
          <div class="flex flex-wrap gap-1.5 text-[11px] font-bold text-zinc-600">
            ${t.location ? meta(SVG.pin, t.location) : ''}
            ${t.beds ? meta('', t.beds) : ''}
            ${t.availableFrom ? meta('', 'From ' + t.availableFrom) : ''}
          </div>
          <p class="text-xs text-zinc-700 leading-relaxed whitespace-pre-line break-words">${e(t.content)}</p>
          <div class="pt-3 border-t border-zinc-100 space-y-2">
            <div class="flex items-center gap-2 text-[10px] text-zinc-500 font-medium">
              ${avatarHtml(poster, 'w-6 h-6 text-[10px]', true)}
              <span ${profileAttr(poster.id)} class="font-bold text-darkText cursor-pointer hover:underline">${getUserTag(poster)}</span>
              <span>&bull; ${t.timestamp || ''}</span>
            </div>
            ${isOwner ? `
              <div class="flex items-center gap-2">
                <button onclick="toggleToLetClosed('${t.id}')" class="flex-1 py-1.5 rounded-lg ${t.isClosed ? 'bg-zinc-200 text-zinc-700' : 'bg-emerald-100 text-emerald-800'} text-[11px] font-bold">${t.isClosed ? 'Mark available' : 'Mark as rented'}</button>
                <button onclick="deletePost('${t.id}')" class="p-1.5 hover:bg-rose-50 rounded-lg transition" title="Delete">${SVG.delete}</button>
              </div>
            ` : (t.isClosed
              ? `<p class="text-[11px] font-bold text-zinc-400 text-center py-1">Already rented.</p>`
              : `<button onclick="messageAboutToLet('${t.id}')" class="w-full py-2 rounded-lg bg-darkText text-white text-[11px] font-bold flex items-center justify-center gap-1.5 hover:bg-zinc-800 transition [&_svg]:text-white">${SVG.chat}<span>Message owner</span></button>`)}
          </div>
        </div>
      `;
    }

    function toggleToLetForm() {
      const el = document.getElementById("toletForm");
      if (el) el.classList.toggle("hidden");
    }
    function setToLetFilter(label) { toletFilter = label; renderApp(); }

    function submitToLetPost() {
      const val = id => { const el = document.getElementById(id); return el ? el.value.trim() : ""; };
      const title = val("tTitle"), desc = val("tDesc");
      if (!title || !desc) { showToast("Please add a title and description"); return; }
      playSfx("publish"); posts.unshift({
        id: "p_" + Date.now(),
        authorId: currentUser.id,
        type: "tolet",
        title,
        toletType: val("tType") || "Bachelor",
        location: val("tLocation"),
        rent: val("tRent"),
        beds: val("tBeds"),
        availableFrom: val("tAvail"),
        content: desc,
        isClosed: false,
        hypes: [], vuas: [], reactions: [], comments: [], repostsCount: 0,
        timestamp: "Just now"
      });
      toletFilter = "All";
      renderApp();
      showToast("To-Let posted");
    }

    function toggleToLetClosed(id) {
      const t = posts.find(p => p.id === id);
      if (!t || t.authorId !== currentUser.id) return;
      t.isClosed = !t.isClosed;
      renderApp();
    }

    function messageAboutToLet(id) {
      const t = posts.find(p => p.id === id);
      if (!t) return;
      chatDraft = `Hi! I'm interested in your To-Let post "${t.title}". Is it still available?`;
      messageUser(t.authorId);
    }

    // --- SECTION 5: LOST & FOUND ---
    function renderLostFoundSection() {
      const lostPosts = posts.filter(p => p.type === 'lost_found');

      return `
        <div class="fullbleed self-stretch -mx-3 sm:mx-0 space-y-2 sm:space-y-4">
          <div class="text-center px-1">
            <h2 class="font-extrabold text-base text-darkText"><span class="inline-flex align-middle mr-1.5">${SVG.lostfound}</span>Lost & Found Noticeboard</h2>
            <p class="text-xs text-zinc-500 mt-0.5">Report lost or found belongings across campus.</p>
          </div>

          ${renderPostCreatorCard("lost_found", "Describe the lost or found item with location details...", true)}

          <div class="space-y-2 sm:space-y-4">
            ${lostPosts.map(p => renderPostCard(p)).join('')}
          </div>
        </div>
      `;
    }

    // --- SECTION 6: POLLS ---
    function renderPollsSection() {
      const pollPosts = posts.filter(p => p.type === 'poll');

      return `
        <div class="fullbleed self-stretch -mx-3 sm:mx-0 space-y-2 sm:space-y-4">
          <div class="flex items-center justify-between px-1">
            <div>
              <h2 class="font-extrabold text-base text-darkText"><span class="inline-flex align-middle mr-1.5">${SVG.polls}</span>Campus Opinion Polls</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Gather real-time student opinions on campus topics.</p>
            </div>
            <button onclick="togglePollForm()" class="px-3.5 py-2 bg-darkText text-white text-xs font-bold rounded-xl">Create Poll</button>
          </div>

          <div id="pollForm" class="${pollFormOpen ? '' : 'hidden'} bg-white p-4 rounded-2xl border border-zinc-200 space-y-3 animate-fadeIn">
            <input type="text" id="pollQuestion" value="${escapeHtml(pollDraftQ)}" oninput="pollDraftQ=this.value" placeholder="Poll question..." class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
            ${pollDraftOpts.map((v, i) => `<div class="flex items-center gap-2"><input type="text" id="pollOpt${i}" value="${escapeHtml(v)}" oninput="pollDraftOpts[${i}]=this.value" placeholder="Option ${i + 1}" class="flex-1 min-w-0 p-2 bg-zinc-50 rounded-xl text-xs border border-zinc-200 outline-none">${pollDraftOpts.length > 2 ? `<button onclick="removePollOpt(${i})" aria-label="Remove option" class="w-8 h-8 shrink-0 rounded-lg bg-zinc-100 text-zinc-500 hover:text-accentRed font-bold">&times;</button>` : ''}</div>`).join('')}
            <div class="flex items-center gap-2">
              <button onclick="addPollOpt()" class="px-3 py-2 bg-zinc-100 hover:bg-zinc-200 text-darkText text-xs font-bold rounded-xl">+ Add option</button>
              <button onclick="submitPollPost()" class="px-4 py-2 bg-darkText text-white text-xs font-bold rounded-xl">Launch Poll</button>
            </div>
          </div>

          <div class="space-y-2 sm:space-y-4">
            ${pollPosts.map(p => renderPollCard(p)).join('')}
          </div>
        </div>
      `;
    }

    // --- SECTION 7: GLOBAL COMMUNITY CHAT ---
    function renderGlobalChatSection() {
      return `
        <div class="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full h-[calc(100dvh-9.5rem)] sm:h-[calc(100dvh-10rem)] min-h-[340px] md:h-[78vh] bg-white rounded-2xl border border-zinc-200 shadow-sm flex flex-col overflow-hidden">
          <div class="p-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
            <div>
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText">DIU Public Chatroom</h3>
              <p class="text-[10px] text-zinc-500">Live conversation for all university departments</p>
            </div>
            <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">Active</span>
          </div>

          <div data-chatscroll class="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-3">
            ${globalChatMessages.map(msg => {
              const sender = getUserById(msg.userId);
              const isMe = msg.userId === currentUser.id;
              return `
                <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'}">
                  <span ${profileAttr(sender.id)} class="text-[10px] text-zinc-500 mb-0.5 font-bold ${sender.id ? 'cursor-pointer hover:underline' : ''}">${getUserTag(sender)}</span>
                  <div class="p-3 rounded-2xl max-w-[85%] sm:max-w-sm break-words text-xs ${isMe ? 'bg-darkText text-white rounded-br-none' : 'bg-zinc-100 text-darkText rounded-bl-none'}">
                    ${msg.text}
                    ${msg.image ? `<img src="${msg.image}" class="mt-1.5 rounded-xl max-h-52 w-full object-cover" alt="Shared photo">` : ''}
                    ${renderAudioMsg(msg)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          ${renderChatPreview()}
          <div class="p-3 border-t border-zinc-200 flex items-center space-x-2 bg-white">
            ${voiceRec && voiceRec.target === 'global' ? voiceRecordingBar() : `
            ${chatAttachButton()}
            <input type="text" id="chatInput" onkeydown="if(event.key==='Enter'){sendGlobalChatMessage(false)}" placeholder="Type message..." class="flex-1 min-w-0 p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
            ${voiceMicButton('global')}
            <button onclick="sendGlobalChatMessage(false)" class="px-4 py-2.5 bg-darkText text-white font-bold text-xs rounded-xl">Send</button>`}
          </div>
        </div>
      `;
    }

    // --- GOSSIP: custom group chats (create, add connections, rename) ---
    let gossipGroups = [];
    let activeGossipId = null, gossipModal = null, gossipDraft = { name: "", members: [] };
    try { const _s = JSON.parse(localStorage.getItem("diuHubV2") || "null"); if (_s && _s.gg) gossipGroups = _s.gg; } catch (_) {}

    const gossipMine = () => gossipGroups.filter(g => g.memberIds.includes(currentUser.id));
    const gossipActive = () => gossipGroups.find(g => g.id === activeGossipId && g.memberIds.includes(currentUser.id));
    const gossipConns = () => registeredUsers.filter(u => u.id !== currentUser.id && (currentUser.connectedUserIds || []).includes(u.id));
    function gossipAvatar(g, cls) {
      return `<div class="${cls} rounded-full bg-darkText text-accentLime flex items-center justify-center font-black shrink-0">${escapeHtml((g.name.trim()[0] || "G").toUpperCase())}</div>`;
    }

    function renderGossipSection() {
      const groups = gossipMine().slice().sort((a, b) => (b.updated || 0) - (a.updated || 0));
      const g = gossipActive();
      const list = groups.length ? groups.map(x => {
        const last = x.messages[x.messages.length - 1];
        const prev = last ? (last.sys ? last.text : (last.text || (last.audio ? "Voice note" : "Photo"))) : "No messages yet";
        return `<button onclick="openGossip('${x.id}')" class="w-full flex items-center gap-3 p-3 text-left border-b border-zinc-100 ${x.id === activeGossipId ? 'bg-zinc-100' : 'hover:bg-zinc-50'}">
          ${gossipAvatar(x, 'w-10 h-10 text-sm')}
          <div class="min-w-0 flex-1"><p class="font-bold text-xs text-darkText truncate">${escapeHtml(x.name)}</p>
          <p class="text-[10px] text-zinc-500 truncate">${escapeHtml(prev)}</p></div>
          <span class="text-[10px] text-zinc-400 shrink-0">${x.memberIds.length}</span></button>`;
      }).join("") : `<p class="p-4 text-xs text-zinc-400">No gossip groups yet. Create one and add your connections.</p>`;

      const chat = !g ? `<div class="flex-1 flex items-center justify-center text-xs text-zinc-400 p-6 text-center">Pick a group or create a new one to start gossiping</div>` : `
        <div class="p-3 border-b border-zinc-200 bg-zinc-50 flex items-center gap-2">
          <button onclick="closeGossip()" class="md:hidden p-1.5 rounded-lg hover:bg-zinc-200 font-black text-sm leading-none" aria-label="Back">&larr;</button>
          ${gossipAvatar(g, 'w-9 h-9 text-sm')}
          <div class="min-w-0 flex-1"><h3 class="font-extrabold text-xs text-darkText truncate">${escapeHtml(g.name)}</h3>
          <p class="text-[10px] text-zinc-500 truncate">${g.memberIds.map(id => escapeHtml(getUserById(id).name)).join(", ")}</p></div>
          <button onclick="openGossipSettings()" class="px-3 py-1.5 bg-white border border-zinc-200 hover:bg-zinc-100 rounded-lg text-[11px] font-bold">Group info</button>
        </div>
        <div data-chatscroll class="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-3">
          ${g.messages.length ? g.messages.map(msg => {
            if (msg.sys) return `<p class="text-center text-[10px] text-zinc-400 font-bold">${escapeHtml(msg.text)}</p>`;
            const sender = getUserById(msg.userId), isMe = msg.userId === currentUser.id;
            return `<div class="flex flex-col ${isMe ? 'items-end' : 'items-start'}">
              <span class="text-[10px] text-zinc-500 mb-0.5 font-bold">${isMe ? 'You' : escapeHtml(sender.name)}</span>
              <div class="p-3 rounded-2xl max-w-[85%] sm:max-w-sm break-words text-xs ${isMe ? 'bg-darkText text-white rounded-br-none' : 'bg-zinc-100 text-darkText rounded-bl-none'}">
                ${escapeHtml(msg.text || "")}
                ${msg.image ? `<img src="${msg.image}" class="mt-1.5 rounded-xl max-h-52 w-full object-cover" alt="Shared photo">` : ''}
                ${renderAudioMsg(msg)}
              </div></div>`;
          }).join("") : `<p class="text-center text-xs text-zinc-400 mt-6">Say something to start the gossip</p>`}
        </div>
        ${renderChatPreview()}
        <div class="p-3 border-t border-zinc-200 flex items-center space-x-2 bg-white">
          ${voiceRec && voiceRec.target === 'gossip' ? voiceRecordingBar() : `
          ${chatAttachButton()}
          <input type="text" id="gossipInput" onkeydown="if(event.key==='Enter'){sendGossip()}" placeholder="Type message..." class="flex-1 min-w-0 p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
          ${voiceMicButton('gossip')}
          <button onclick="sendGossip()" class="px-4 py-2.5 bg-darkText text-white font-bold text-xs rounded-xl">Send</button>`}
        </div>`;

      return `
        <div class="max-w-4xl xl:max-w-5xl mx-auto w-full h-[calc(100dvh-9.5rem)] sm:h-[calc(100dvh-10rem)] min-h-[340px] md:h-[78vh] bg-white rounded-2xl border border-zinc-200 shadow-sm flex overflow-hidden">
          <div class="${g ? 'hidden md:flex' : 'flex'} w-full md:w-72 shrink-0 flex-col border-r border-zinc-200">
            <div class="p-3 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText">Gossip</h3>
              <button onclick="openGossipCreate()" class="px-3 py-1.5 bg-darkText text-white text-[11px] font-bold rounded-lg">+ New group</button>
            </div>
            <div class="flex-1 overflow-y-auto custom-scrollbar">${list}</div>
          </div>
          <div class="${g ? 'flex' : 'hidden md:flex'} flex-1 min-w-0 flex-col">${chat}</div>
        </div>
        ${gossipModal ? renderGossipModal() : ''}`;
    }

    function renderGossipModal() {
      const g = gossipModal === "settings" ? gossipActive() : null;
      if (gossipModal === "settings" && !g) return "";
      const isOwner = g && g.ownerId === currentUser.id;
      const conns = gossipConns();
      const pick = (u, on, fn, label) => `<div class="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">
        ${avatarHtml(u, 'w-8 h-8 text-xs')}<span class="flex-1 min-w-0 truncate text-xs font-bold">${escapeHtml(u.name)}</span>
        <button onclick="${fn}" class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${on ? 'bg-darkText text-white' : 'bg-zinc-200 text-zinc-700'}">${label}</button></div>`;
      let body;
      if (!g) {
        body = `<p class="text-[10px] font-bold uppercase text-zinc-400 mb-1.5">Add connections</p>
          <div class="space-y-1.5 max-h-52 overflow-y-auto custom-scrollbar">${conns.length ? conns.map(u => { const on = gossipDraft.members.includes(u.id); return pick(u, on, `toggleDraftMember('${u.id}')`, on ? 'Added' : 'Add'); }).join("") : '<p class="text-xs text-zinc-400">Connect with students first, then add them here.</p>'}</div>
          <button onclick="createGossip()" class="mt-3 w-full py-2.5 bg-darkText text-white font-bold text-xs rounded-xl">Create group</button>`;
      } else {
        const addable = conns.filter(u => !g.memberIds.includes(u.id));
        body = `<p class="text-[10px] font-bold uppercase text-zinc-400 mb-1.5">Members (${g.memberIds.length})</p>
          <div class="space-y-1.5 max-h-40 overflow-y-auto custom-scrollbar">${g.memberIds.map(id => { const u = getUserById(id); return `<div class="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100">${avatarHtml(u, 'w-8 h-8 text-xs')}<span class="flex-1 min-w-0 truncate text-xs font-bold">${escapeHtml(u.name)}${id === g.ownerId ? ' <span class="text-[10px] text-zinc-400">(admin)</span>' : ''}</span>${isOwner && id !== currentUser.id ? `<button onclick="removeGossipMember('${id}')" class="text-[11px] font-bold text-accentRed">Remove</button>` : ''}</div>`; }).join("")}</div>
          <p class="text-[10px] font-bold uppercase text-zinc-400 mt-3 mb-1.5">Add people</p>
          <div class="space-y-1.5 max-h-36 overflow-y-auto custom-scrollbar">${addable.length ? addable.map(u => pick(u, false, `addGossipMember('${u.id}')`, 'Add')).join("") : '<p class="text-xs text-zinc-400">All your connections are already in this group.</p>'}</div>
          <button onclick="leaveGossip()" class="mt-3 w-full py-2.5 bg-rose-50 text-accentRed font-bold text-xs rounded-xl">Leave group</button>`;
      }
      return `<div class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onclick="if(event.target===this){gossipModal=null;renderApp();}">
        <div class="w-full max-w-sm max-h-[90dvh] overflow-y-auto bg-white rounded-2xl p-4 shadow-2xl">
          <div class="flex items-center justify-between mb-3"><h3 class="font-extrabold text-sm">${g ? 'Group info' : 'New gossip group'}</h3>
          <button onclick="gossipModal=null;renderApp();" class="text-zinc-500 font-black">&times;</button></div>
          <p class="text-[10px] font-bold uppercase text-zinc-400 mb-1.5">Group name</p>
          <div class="flex gap-2 mb-3"><input id="gossipNameInput" type="text" maxlength="40" value="${escapeHtml(gossipDraft.name)}" oninput="gossipDraft.name=this.value" placeholder="Group name" class="flex-1 min-w-0 p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
          ${g ? `<button onclick="renameGossip()" class="px-3 py-2.5 bg-darkText text-white font-bold text-xs rounded-xl">Save</button>` : ''}</div>
          ${body}</div></div>`;
    }

    function openGossipCreate() { gossipDraft = { name: "", members: [] }; gossipModal = "create"; renderApp(); }
    function openGossipSettings() { const g = gossipActive(); if (!g) return; gossipDraft = { name: g.name, members: [] }; gossipModal = "settings"; renderApp(); }
    function toggleDraftMember(id) { const m = gossipDraft.members, i = m.indexOf(id); if (i < 0) m.push(id); else m.splice(i, 1); renderApp(); }
    function gossipSys(g, text) { g.messages.push({ id: "gs_" + Date.now() + Math.random(), sys: true, text }); g.updated = Date.now(); }
    function createGossip() {
      const name = gossipDraft.name.trim() || "New Gossip";
      const g = { id: "gg_" + Date.now(), name, ownerId: currentUser.id, memberIds: [currentUser.id, ...gossipDraft.members], messages: [], updated: Date.now() };
      gossipSys(g, currentUser.name + " created the group");
      gossipGroups.push(g); activeGossipId = g.id; gossipModal = null;
      playSfx("send"); saveState(); renderApp();
    }
    function openGossip(id) { activeGossipId = id; chatPendingImage = null; renderApp(); }
    function closeGossip() { if (voiceRec) finishVoice(false); activeGossipId = null; renderApp(); }
    function renameGossip() {
      const g = gossipActive(), name = gossipDraft.name.trim();
      if (!g || !name || name === g.name) return;
      g.name = name; gossipSys(g, currentUser.name + " renamed the group to " + name);
      playSfx("send"); saveState(); renderApp();
    }
    function addGossipMember(id) { const g = gossipActive(); if (!g || g.memberIds.includes(id)) return; g.memberIds.push(id); gossipSys(g, currentUser.name + " added " + getUserById(id).name); saveState(); renderApp(); }
    function removeGossipMember(id) { const g = gossipActive(); if (!g || g.ownerId !== currentUser.id) return; g.memberIds = g.memberIds.filter(x => x !== id); gossipSys(g, getUserById(id).name + " was removed"); saveState(); renderApp(); }
    function leaveGossip() {
      const g = gossipActive(); if (!g) return;
      gossipSys(g, currentUser.name + " left the group");
      g.memberIds = g.memberIds.filter(x => x !== currentUser.id);
      if (g.ownerId === currentUser.id && g.memberIds.length) g.ownerId = g.memberIds[0];
      if (!g.memberIds.length) gossipGroups = gossipGroups.filter(x => x !== g);
      gossipModal = null; activeGossipId = null; saveState(); renderApp();
    }
    function sendGossip() {
      const g = gossipActive(); if (!g) return;
      const input = document.getElementById("gossipInput"), text = input ? input.value.trim() : "";
      if (!text && !chatPendingImage) return;
      playSfx("send");
      g.messages.push({ id: "gm_" + Date.now(), userId: currentUser.id, text, audio: null, image: chatPendingImage, time: "Just now" });
      g.updated = Date.now();
      if (input) input.value = ""; chatPendingImage = null; saveState(); renderApp();
    }

    // --- SECTION 8: CONNECT NETWORK & PRIVATE DMs ---
    function renderConnectSection() {
      const me = currentUser;
      const isConnected = id => (me.connectedUserIds || []).includes(id);
      const sentTo = id => pendingConnectRequests.some(r => r.fromUserId === me.id && r.toUserId === id);
      const incoming = pendingConnectRequests.filter(r => r.toUserId === me.id).map(r => getUserById(r.fromUserId)).filter(Boolean);
      const others = registeredUsers.filter(u => u.id !== me.id);
      const connCount = others.filter(u => isConnected(u.id)).length;

      const row = (user, actions) => `
        <div data-conn-row data-search="${(user.name + ' ' + (user.dept || '') + ' ' + (user.username || '')).toLowerCase()}">
          <div class="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
            ${avatarHtml(user, 'w-10 h-10 text-sm', true)}
            <div class="min-w-0 flex-1">
              <p ${profileAttr(user.id)} class="font-bold text-xs text-darkText truncate cursor-pointer hover:underline">${user.name}${deptBadge(user.dept)}</p>
              <p class="text-[10px] text-zinc-500 truncate">${user.bio || 'DIU Student'}</p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">${actions}</div>
          </div>
        </div>`;

      const btnDark = 'px-3 py-1.5 bg-darkText text-white text-xs font-bold rounded-lg';
      const btnLight = 'px-3 py-1.5 bg-white hover:bg-zinc-100 border border-zinc-300 text-darkText text-xs font-bold rounded-lg';

      const actionsFor = user => {
        if (isConnected(user.id)) return `<span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md">Connected</span><button onclick="messageUser('${user.id}')" class="${btnDark}">Message</button>`;
        if (pendingConnectRequests.some(r => r.fromUserId === user.id && r.toUserId === me.id)) return `<button onclick="acceptConnect('${user.id}')" class="${btnDark}">Accept</button><button onclick="declineConnect('${user.id}')" class="${btnLight}">Decline</button>`;
        if (sentTo(user.id)) return `<span class="text-[10px] font-bold text-zinc-500 bg-zinc-200 px-2 py-1 rounded-md">Requested</span><button onclick="cancelConnect('${user.id}')" class="${btnLight}">Cancel</button>`;
        return `<button onclick="sendConnectRequest('${user.id}')" class="${btnLight}">+ Connect</button>`;
      };

      return `
        <div class="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full space-y-4">
          <div class="flex items-center justify-between gap-3 px-1">
            <div>
              <h2 class="font-extrabold text-base text-darkText"><span class="inline-flex align-middle mr-1.5">${SVG.connect}</span>Connects</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Send connect requests to any student and accept the ones you receive.</p>
            </div>
            <div class="text-center px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-100 shrink-0">
              <p class="text-xl font-black text-darkText leading-none">${connCount}</p>
              <p class="text-[10px] font-bold text-zinc-500 mt-1">Connected</p>
            </div>
          </div>

          ${incoming.length ? `
            <div class="bg-white p-4 rounded-2xl border-2 border-accentPurple space-y-3">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText flex items-center gap-2">Requests <span class="px-2 py-0.5 rounded-full bg-accentRed text-white text-[10px]">${incoming.length}</span></h3>
              <div class="space-y-2">
                ${incoming.map(u => row(u, `<button onclick="acceptConnect('${u.id}')" class="${btnDark}">Accept</button><button onclick="declineConnect('${u.id}')" class="${btnLight}">Decline</button>`)).join('')}
              </div>
            </div>` : ''}

          <div class="bg-white p-4 rounded-2xl border border-zinc-200 space-y-3">
            <div class="flex items-center justify-between gap-3">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-zinc-500">All Students (${others.length})</h3>
              <input type="text" id="connectSearch" oninput="filterConnects(this.value)" placeholder="Search students..." class="w-44 sm:w-56 px-3 py-2 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200 focus:border-zinc-400">
            </div>
            <div class="space-y-2">
              ${others.length ? others.map(u => row(u, actionsFor(u))).join('') : '<p class="text-xs text-zinc-400 text-center py-6">No other students yet.</p>'}
              <p id="connectNoMatch" class="hidden text-xs text-zinc-400 text-center py-6">No student matches your search.</p>
            </div>
          </div>
        </div>
      `;
    }

    function filterConnects(value) {
      const v = (value || "").trim().toLowerCase();
      let shown = 0;
      document.querySelectorAll("[data-conn-row]").forEach(r => {
        const match = !v || (r.dataset.search || "").includes(v);
        r.classList.toggle("hidden", !match);
        if (match) shown++;
      });
      const nm = document.getElementById("connectNoMatch");
      if (nm) nm.classList.toggle("hidden", shown > 0 || !v);
    }

    // --- SECTION 8b: PRIVATE CHATS (separate tab) ---
    function renderDmSection() {
      const me = currentUser;
      const keyFor = u => [me.id, u.id].sort().join('_');
      const entries = registeredUsers.filter(u => u.id !== me.id).map(u => {
        const msgs = privateMessages[keyFor(u)] || [];
        return { user: u, msgs, last: msgs[msgs.length - 1], conn: (me.connectedUserIds || []).includes(u.id) };
      }).filter(e => e.msgs.length || e.conn || e.user.id === selectedChatUser);
      entries.sort((a, b) => (b.msgs.length ? 1 : 0) - (a.msgs.length ? 1 : 0) || ((b.last && b.last.ts) || 0) - ((a.last && a.last.ts) || 0));

      const preview = e => {
        if (!e.last) return 'Say hi!';
        const t = e.last.text || (e.last.audio ? 'Voice note' : e.last.image ? 'Photo' : '');
        return (e.last.senderId === me.id ? 'You: ' : '') + t;
      };

      return `
        <div class="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto w-full">
          <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-[18rem_1fr] h-[calc(100dvh-9.5rem)] sm:h-[calc(100dvh-10rem)] min-h-[340px] md:h-[78vh]">
            <div class="${selectedChatUser ? 'hidden md:flex' : 'flex'} flex-col min-h-0 md:border-r border-zinc-200">
              <div class="px-4 py-3 border-b border-zinc-200 bg-zinc-50">
                <h2 class="font-extrabold text-sm text-darkText"><span class="inline-flex align-middle mr-1.5">${SVG.mail}</span>Private Chats</h2>
              </div>
              <div class="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2 space-y-1">
                ${entries.length ? entries.map(e => `
                  <button onclick="messageUser('${e.user.id}')" class="w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition ${e.user.id === selectedChatUser ? 'bg-zinc-100' : 'hover:bg-zinc-50'}">
                    ${avatarHtml(e.user, 'w-10 h-10 text-sm')}
                    <div class="min-w-0 flex-1">
                      <p class="font-bold text-xs text-darkText truncate">${e.user.name}${deptBadge(e.user.dept)}</p>
                      <p class="text-[11px] text-zinc-500 truncate">${preview(e)}</p>
                    </div>
                  </button>`).join('') : `
                  <div class="text-center p-6 text-xs text-zinc-400 font-bold">No chats yet. Connect with students or message a seller or blood requester.</div>`}
              </div>
              <div class="p-2 border-t border-zinc-200"><button onclick="switchTab('connect')" class="w-full py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-darkText">Find students to connect</button></div>
            </div>
            <div class="${selectedChatUser ? 'flex' : 'hidden md:flex'} flex-col min-h-0 p-4">
              ${selectedChatUser ? renderPrivateChatBox() : `
                <div class="h-full flex items-center justify-center text-center p-6 text-xs text-zinc-400 font-bold">Select a chat to start messaging.</div>`}
            </div>
          </div>
        </div>
      `;
    }

    // --- SECTION 10: LEADERBOARD (Top 10 Hyped / Top 10 Vua) ---
    function leaderboardData() {
      const map = {};
      registeredUsers.forEach(u => { map[u.id] = { user: u, hypes: 0, vuas: 0 }; });
      posts.forEach(p => {
        if (p.type === 'confession') return; // anonymous posts never count
        const e = map[p.authorId];
        if (!e) return;
        (p.hypes || []).forEach(h => { e.hypes += h.count; });
        (p.vuas || []).forEach(v => { e.vuas += v.count; });
      });
      return Object.values(map);
    }

    // --- CREATOR BOX ---
    function renderCreatorBox() {
      return `
        <div class="bg-transparent rounded-2xl border border-zinc-300 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div onclick="openUserProfile(CREATOR_ID)" role="link" title="View profile" class="shrink-0 cursor-pointer">${squareAvatar(getUserById(CREATOR_ID), 'w-14 h-14 rounded-2xl text-xl')}</div>
            <div class="min-w-0">
              <p class="text-[10px] font-extrabold uppercase tracking-widest text-black">Creator</p>
              <h3 onclick="openUserProfile(CREATOR_ID)" role="link" title="View profile" class="font-black text-base text-black leading-tight break-words cursor-pointer hover:underline">Al Sahariar Sakib <span class="text-green-600">&lt;knight/&gt;</span></h3>
              <p class="text-xs font-bold text-black">Dept. of CSE, DIU</p>
            </div>
          </div>
          <div class="flex items-center gap-4 sm:gap-5">
            <div class="text-center">
              <p id="creatorHypeTotal" class="text-2xl font-black text-black leading-none">${creatorHype.total}</p>
              <p class="text-[10px] font-bold text-black mt-1">hypes</p>
            </div>
            <button onclick="hypeCreator(event)" class="px-5 py-3 bg-darkText text-white font-extrabold text-xs rounded-xl hover:bg-zinc-800 active:scale-95 transition flex items-center gap-1.5 [&_svg]:text-white">${SVG.hypeStock}<span>Hype Creator</span></button>
          </div>
        </div>`;
    }

    function hypeCreator(ev) {
      playSfx("vua");
      creatorHype.total++;
      creatorHype.byUser[currentUser.id] = (creatorHype.byUser[currentUser.id] || 0) + 1;
      floatMsg(ev, "+1 Hype!", "bg-emerald-100 text-emerald-700");
      renderApp();
    }

    function renderLeaderboardSection() {
      const rows = leaderboardData();
      const hyped = rows.filter(r => r.user.id !== CREATOR_ID && r.hypes > 0).sort((a, b) => b.hypes - a.hypes).slice(0, 10);
      const vuaed = rows.filter(r => r.user.id !== CREATOR_ID && r.vuas > 0).sort((a, b) => b.vuas - a.vuas).slice(0, 10);
      const medal = i => i === 0 ? 'bg-amber-400 text-darkText' : i === 1 ? 'bg-zinc-300 text-darkText' : i === 2 ? 'bg-orange-300 text-darkText' : 'bg-zinc-100 text-zinc-500';

      const card = (title, sub, items, key, headBg, barBg, icon) => {
        const max = items.length ? items[0][key] : 1;
        return `
          <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <div class="${headBg} px-4 py-3 flex items-center justify-between">
              <div>
                <h3 class="font-black text-sm text-darkText">${title}</h3>
                <p class="text-[10px] font-bold text-darkText/70">${sub}</p>
              </div>
              <span class="w-8 h-8 rounded-xl bg-darkText/10 flex items-center justify-center">${icon}</span>
            </div>
            <div class="p-3 space-y-2">
              ${items.length ? items.map((r, i) => {
                const me = r.user.id === currentUser.id;
                const pct = Math.max(6, Math.round(r[key] / max * 100));
                return `
                  <div class="flex items-center gap-3 p-2 rounded-xl ${me ? 'bg-zinc-50 ring-2 ring-darkText' : 'hover:bg-zinc-50'}">
                    <span class="w-7 h-7 rounded-full ${medal(i)} flex items-center justify-center text-xs font-black shrink-0">${i + 1}</span>
                    ${avatarHtml(r.user, 'w-9 h-9 text-sm', true)}
                    <div class="min-w-0 flex-1">
                      <div class="flex items-center justify-between gap-2">
                        <p ${profileAttr(r.user.id)} class="font-bold text-xs text-darkText truncate cursor-pointer hover:underline">${r.user.name}${me ? ' <span class="text-[9px] px-1.5 py-0.5 rounded-md bg-darkText text-white font-extrabold align-middle">YOU</span>' : ''}</p>
                        <span class="font-black text-sm text-darkText">${r[key]}</span>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="shrink-0">${deptBadge(r.user.dept).replace('ml-1.5 ', '')}</span>
                        <div class="h-1.5 flex-1 rounded-full bg-zinc-100 overflow-hidden"><div class="h-full rounded-full ${barBg}" style="width:${pct}%"></div></div>
                      </div>
                    </div>
                  </div>`;
              }).join('') : '<p class="text-xs text-zinc-400 text-center py-8">No one here yet.</p>'}
            </div>
          </div>`;
      };

      return `
        <div class="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto w-full space-y-4">
          <div class="flex items-center justify-between px-1">
            <div>
              <h2 class="font-extrabold text-base text-darkText">Toppers</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Who is getting the most hypes and vuas. Anonymous confession posts are not counted.</p>
            </div>
            <span class="w-10 h-10 rounded-xl bg-zinc-900/5 flex items-center justify-center [&_svg]:text-darkText">${SVG.trophy}</span>
          </div>
          ${renderCreatorBox()}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${card('Top 10 Hyped', 'Most hypes received', hyped, 'hypes', 'bg-hypeLime', 'bg-hypeLime', SVG.hypeStock)}
            ${card('Top 10 Vua', 'Most vuas received', vuaed, 'vuas', 'bg-vuaPeach', 'bg-vuaPeach', SVG.vuaThumb)}
          </div>
        </div>
      `;
    }

    // --- SECTION 9: USER PROFILE & METRICS ---
    function renderProfileSection() { return renderProfileView(currentUser, true); }

    function renderUserProfileSection() {
      const u = registeredUsers.find(x => x.id === viewProfileId);
      if (!u) {
        return `<div class="max-w-2xl mx-auto w-full space-y-4"><button onclick="closeUserProfile()" class="px-3 py-1.5 rounded-xl bg-white border border-zinc-300 text-xs font-bold hover:bg-zinc-100">&larr; Back</button><div class="bg-white p-6 rounded-2xl border border-zinc-200 text-center text-xs text-zinc-500">This user could not be found.</div></div>`;
      }
      return renderProfileView(u, u.id === currentUser.id);
    }

    function openUserProfile(userId) {
      if (!userId || !currentUser) return;
      if (userId === currentUser.id) { switchTab("profile"); return; }
      if (!registeredUsers.some(u => u.id === userId)) return;
      if (voiceRec) finishVoice(false);
      if (activeTab !== "userprofile") profileReturnTab = activeTab;
      moreMenuOpen = false;
      opinionBoxPostId = null; opinionReplyTo = null;
      hypeAuditModalPostId = null; vuaAuditModalPostId = null; reactionAuditModalPostId = null; pollVotersModal = null;
      viewProfileId = userId;
      activeTab = "userprofile";
      renderApp();
    }

    function closeUserProfile() {
      viewProfileId = null;
      activeTab = (profileReturnTab && profileReturnTab !== "userprofile") ? profileReturnTab : "feed";
      renderApp();
    }

    // Connect / Message buttons shown on another user's profile
    function profileActionBar(user) {
      const me = currentUser;
      const btnDark = 'px-4 py-2 bg-darkText text-white text-xs font-bold rounded-xl hover:bg-zinc-800 transition';
      const btnLight = 'px-4 py-2 bg-white hover:bg-zinc-100 border border-zinc-300 text-darkText text-xs font-bold rounded-xl transition';
      let main;
      if ((me.connectedUserIds || []).includes(user.id)) {
        main = `<span class="px-3 py-2 text-xs font-bold text-emerald-700 bg-emerald-100 rounded-xl">Connected</span>`;
      } else if (pendingConnectRequests.some(r => r.fromUserId === user.id && r.toUserId === me.id)) {
        main = `<button onclick="acceptConnect('${user.id}')" class="${btnDark}">Accept request</button><button onclick="declineConnect('${user.id}')" class="${btnLight}">Decline</button>`;
      } else if (pendingConnectRequests.some(r => r.fromUserId === me.id && r.toUserId === user.id)) {
        main = `<span class="px-3 py-2 text-xs font-bold text-zinc-500 bg-zinc-200 rounded-xl">Requested</span><button onclick="cancelConnect('${user.id}')" class="${btnLight}">Cancel</button>`;
      } else {
        main = `<button onclick="sendConnectRequest('${user.id}')" class="${btnDark}">+ Connect</button>`;
      }
      return `<div class="flex flex-wrap items-center gap-2 mt-4">${main}<button onclick="messageUser('${user.id}')" class="${btnLight}">Message</button></div>`;
    }

    function renderProfileView(user, isSelf) {
      const m = calculateMetricsAndPersona(user.id);
      const mine = posts.filter(p => p.authorId === user.id && p.type !== 'confession');
      const shown = mine.filter(p => ['regular', 'lost_found', 'job', 'tolet'].includes(p.type));
      const sells = posts.filter(p => p.type === 'marketplace' && p.authorId === user.id && p.isSold).length;
      const donated = posts.filter(p => p.type === 'blood' && (p.donors || []).includes(user.id)).length;
      const stat = (label, val) => `<div class="text-center p-3 rounded-xl bg-zinc-50 border border-zinc-100"><p class="text-xl font-black text-darkText">${val}</p><p class="text-[10px] font-bold text-zinc-500">${label}</p></div>`;
      const total = m.reputation + m.hates;
      const repPct = total ? Math.round(m.reputation / total * 100) : 0;
      const chip = (icon, text) => `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] font-bold text-zinc-700">${icon}${text}</span>`;
      
      return `
        <div class="fullbleed self-stretch -mx-3 sm:mx-0 space-y-2 sm:space-y-4">
          ${isSelf ? '' : `<div><button onclick="closeUserProfile()" class="px-3 py-1.5 rounded-xl bg-white border border-zinc-300 text-xs font-bold text-darkText hover:bg-zinc-100 transition">&larr; Back</button></div>`}
          <div class="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
            <div class="px-5 sm:px-6 pt-5 pb-6">
              <div class="flex items-start justify-between">
                <div class="relative">
                  ${squareAvatar(user, 'w-20 h-20 rounded-2xl text-3xl shadow-md')}
                  ${isSelf ? `<label title="Change profile picture" class="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full bg-white border border-zinc-300 shadow flex items-center justify-center cursor-pointer hover:bg-zinc-100 transition text-darkText">${SVG.camera}<input type="file" accept="image/*" class="hidden" onchange="quickAvatarUpload(event)"></label>` : ''}
                </div>
                ${isSelf ? `<div class="flex items-center gap-2"><button onclick="openEditProfile()" title="Edit profile" aria-label="Edit profile" class="p-2 sm:px-4 sm:py-2 rounded-xl border border-zinc-300 text-xs font-bold hover:bg-zinc-100 transition flex items-center gap-1.5">${SVG.edit}<span class="hidden sm:inline">Edit profile</span></button><button onclick="logout()" title="Log out" aria-label="Log out" class="p-2 sm:px-4 sm:py-2 rounded-xl border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50 transition flex items-center gap-1.5">${SVG.logout}<span class="hidden sm:inline">Log out</span></button></div>` : ''}
              </div>
              <div class="mt-3">
                <div class="flex flex-wrap items-center gap-2">
                  <h2 class="font-extrabold text-xl text-darkText">${user.name}</h2>
                  <span class="px-1.5 py-[3px] rounded-md bg-darkText text-white text-[9px] leading-none font-extrabold uppercase tracking-wide">${user.dept}</span>
                </div>
                <p class="text-xs text-zinc-500 font-semibold mt-0.5">@${user.username}</p>
                <p class="text-sm text-zinc-700 mt-3 leading-relaxed">${user.bio || 'No bio provided yet.'}</p>
                <div class="flex flex-wrap gap-2 mt-3">
                  ${chip(SVG.blood, 'Blood ' + user.bloodGroup)}
                  ${chip(SVG.confession, user.isDonor ? 'Available donor' : 'Not donating')}
                  ${chip(SVG.hypeStock, levelFor(m.reputation))}
                  ${isSelf ? chip(SVG.calendar, getStreak() + (getStreak() === 1 ? ' day streak' : ' day streak')) : ''}
                </div>
                ${isSelf ? '' : profileActionBar(user)}
              </div>
              <div class="mt-5 rounded-2xl bg-darkText p-4 text-white relative overflow-hidden">
                <div class="absolute -top-10 -left-8 w-36 h-36 rounded-full bg-hypeLime/20 blur-2xl"></div>
                <div class="absolute -bottom-12 -right-8 w-36 h-36 rounded-full bg-vuaPeach/25 blur-2xl"></div>
                <div class="relative flex items-center justify-between">
                  <p class="text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">Campus Standing</p>
                </div>
                <div class="relative grid grid-cols-2 gap-3 mt-3">
                  <div class="rounded-xl bg-hypeLime text-darkText p-3.5 shadow-lg">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-extrabold uppercase tracking-wider">Reputation</span>
                      <span class="w-6 h-6 rounded-lg bg-darkText/10 flex items-center justify-center">${SVG.hypeStock}</span>
                    </div>
                    <p class="text-4xl font-black leading-none mt-2" data-countup="${m.reputation}" data-cukey="${user.id}">${m.reputation}</p>
                    <p class="text-[10px] font-bold opacity-70 mt-1">hypes earned</p>
                  </div>
                  <div class="rounded-xl bg-vuaPeach text-darkText p-3.5 shadow-lg">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-extrabold uppercase tracking-wider">Hates</span>
                      <span class="w-6 h-6 rounded-lg bg-darkText/10 flex items-center justify-center">${SVG.vuaThumb}</span>
                    </div>
                    <p class="text-4xl font-black leading-none mt-2" data-countup="${m.hates}" data-cukey="${user.id}">${m.hates}</p>
                    <p class="text-[10px] font-bold opacity-70 mt-1">vuas received</p>
                  </div>
                </div>
                <div class="relative mt-4">
                  <div class="flex justify-between text-[10px] font-extrabold mb-1.5">
                    <span class="text-hypeLime">${total ? `<span data-countup="${repPct}" data-cukey="${user.id}">${repPct}</span>% love` : 'No votes yet'}</span>
                    <span class="text-vuaPeach">${total ? `<span data-countup="${100 - repPct}" data-cukey="${user.id}">${100 - repPct}</span>% hate` : ''}</span>
                  </div>
                  <div class="h-2.5 rounded-full bg-vuaPeach/80 overflow-hidden">
                    <div class="h-full rounded-full bg-hypeLime" data-grow="${total ? repPct : 0}" data-cukey="${user.id}" style="width:${total ? repPct : 0}%;transition:width 1.4s cubic-bezier(.22,1,.36,1)"></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                ${stat('Posts', mine.length)}
                ${stat('Connections', (user.connectedUserIds || []).length)}
                ${stat('Total sells', sells)}
                ${stat('Blood donated', donated)}
              </div>
            </div>
          </div>
          <h3 class="font-bold text-xs text-zinc-500 px-1">${isSelf ? 'My posts' : 'Posts'}</h3>
          ${shown.length ? shown.map(p => p.type === 'job' ? renderJobCard(p) : p.type === 'tolet' ? renderToLetCard(p) : renderPostCard(p)).join('') : `<div class="bg-white p-6 rounded-2xl border border-zinc-200 text-center text-xs text-zinc-500">${isSelf ? 'You have not posted on the feed yet.' : 'No posts yet.'}</div>`}
        </div>
      `;
    }

    // --- REUSABLE CARD COMPONENTS ---

    function renderPostCreatorCard(type, placeholder, allowImage) {
      return `
        <div class="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
          <textarea id="postInputText" rows="3" placeholder="${placeholder}" class="w-full p-3 bg-white rounded-xl text-xs outline-none border border-zinc-200 focus:border-zinc-400 transition"></textarea>
          
          <div id="imgPrev-post">${allowImage ? renderImgPreview('post') : ''}</div>
          <div class="flex items-center justify-between pt-1">
            <div class="flex items-center space-x-2">
              ${allowImage ? photoButton('post') : ''}
            </div>

            <button onclick="submitStandardPost('${type}')" class="px-4 py-2 bg-darkText text-white font-bold text-xs rounded-xl hover:bg-zinc-800 transition">
              Publish
            </button>
          </div>
        </div>
      `;
    }

    function renderPostCard(post) {
      const author = getUserById(post.authorId);
      const isOwner = post.authorId === currentUser.id;
      const isConfession = post.type === 'confession';
      const displayName = isConfession && post.isConfessionAnonymous ? "Anonymous Student" : getUserTag(author);
      const linkAuthor = !(isConfession && post.isConfessionAnonymous) && author && author.id;
      const plAttr = linkAuthor ? profileAttr(author.id) : '';
      const plCls = linkAuthor ? 'cursor-pointer' : '';

      let totalHypes = 0;
      (post.hypes || []).forEach(h => { totalHypes += h.count; });
      let totalVuas = 0;
      (post.vuas || []).forEach(v => { totalVuas += v.count; });

      const userReaction = (post.reactions || []).find(r => r.userId === currentUser.id);
      const usedHype = post.authorId === currentUser.id && (post.hypes || []).some(h => h.userId === currentUser.id && h.count >= 1);
      const usedVua = post.authorId === currentUser.id && (post.vuas || []).some(v => v.userId === currentUser.id && v.count >= 1);
      const reposted = (post.reposts || []).some(r => r.userId === currentUser.id);

      return `
        <div class="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm space-y-3 relative">
          ${renderRepostBanner(post)}
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              ${(!isConfession && author.avatar)
                ? `<img ${plAttr} src="${author.avatar}" alt="" class="w-8 h-8 rounded-xl ${plCls} object-cover border border-zinc-200">`
                : `<div ${plAttr} class="w-8 h-8 rounded-xl ${plCls} bg-zinc-100 text-darkText flex items-center justify-center font-black text-xs border border-zinc-200">
                ${isConfession ? SVG.confession : author.name.charAt(0)}
              </div>`}
              <div>
                <h4 ${plAttr} class="font-bold text-xs text-darkText ${plCls} ${linkAuthor ? 'hover:underline' : ''}">${displayName}</h4>
                <p class="text-[10px] text-zinc-400 font-medium">${post.timestamp} • <span class="uppercase font-bold text-zinc-500">${post.type}</span></p>
              </div>
            </div>

            ${isOwner ? `
              <button onclick="deletePost('${post.id}')" class="p-1 hover:bg-rose-50 rounded-lg transition" title="Delete Post">
                ${SVG.delete}
              </button>
            ` : ''}
          </div>

          <p class="text-[15px] sm:text-base text-zinc-800 leading-[1.65] font-medium">${post.content}</p>

          ${post.image ? `
            <div class="rounded-xl overflow-hidden border border-zinc-200 max-h-72 bg-zinc-50">
              <img onerror="this.style.display='none'" src="${post.image}" class="w-full h-full object-cover" alt="Media content">
            </div>
          ` : ''}

          <!-- Interactions Bar -->
          <div class="pt-3 border-t border-zinc-100 space-y-2">
            <div class="space-y-2 text-xs">
            <div class="flex flex-nowrap items-center justify-center gap-8 sm:gap-14">
              <!-- Hype Unlimited Button -->
              <div class="relative flex items-center space-x-1">
                <button onclick="addHype('${post.id}', event)" title="${post.authorId === currentUser.id ? 'Hype your own post once' : 'Unlimited hype'}" class="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-hypeLime text-darkText font-extrabold hover:brightness-95 transition shadow-sm ${usedHype ? 'opacity-50' : ''}">
                  ${SVG.hypeStock}
                  <span>${usedHype ? 'Hyped' : 'Hype'}</span>
                </button>
                <button onclick="openHypeAudit('${post.id}')" class="px-2 py-1.5 hover:bg-zinc-100 rounded-lg text-xs font-black text-darkText underline">
                  ${totalHypes}
                </button>
              </div>

              <!-- Vua Unlimited Button -->
              <div class="relative flex items-center space-x-1">
                <button onclick="addVua('${post.id}', event)" title="${post.authorId === currentUser.id ? 'Vua your own post once' : 'Unlimited vua'}" class="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-vuaPeach text-darkText font-extrabold hover:brightness-95 transition shadow-sm ${usedVua ? 'opacity-50' : ''}">
                  ${SVG.vuaThumb}
                  <span>${usedVua ? 'Vua-ed' : 'Vua'}</span>
                </button>
                <button onclick="openVuaAudit('${post.id}')" class="px-2 py-1.5 hover:bg-zinc-100 rounded-lg text-xs font-black text-darkText underline">
                  ${totalVuas}
                </button>
              </div>

            </div>
            <div class="flex flex-nowrap items-center justify-between gap-1">
              <!-- Reaction: tap = Like, hold (or hover) = reaction tray -->
              <div class="relative flex items-center" data-react onmouseenter="trayHover('${post.id}', true)" onmouseleave="trayHover('${post.id}', false)">
                <div id="tray-${post.id}" class="hidden absolute bottom-full left-0 pb-2 z-20">
                  <div class="flex items-center gap-1 bg-white border border-zinc-200 rounded-full shadow-lg px-2 py-1.5">
                    ${REACTIONS.map(r => `<button data-rtype="${r.type}" onclick="applyReaction('${post.id}', '${r.type}')" title="${r.type}" class="p-1.5 rounded-full transition-transform duration-150 hover:scale-125 hover:-translate-y-1.5 [&_svg]:w-7 [&_svg]:h-7">${SVG[r.icon]}</button>`).join('')}
                  </div>
                </div>
                <button onpointerdown="reactDown(event, '${post.id}')" onpointerup="reactUp(event, '${post.id}')" onpointercancel="reactCancel()" onclick="reactClick(event, '${post.id}')" oncontextmenu="return false" style="-webkit-touch-callout:none;touch-action:manipulation" class="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl hover:bg-zinc-100 transition font-bold select-none ${userReaction ? REACTION_COLOR[userReaction.type] : 'text-zinc-600'}">
                  ${userReaction ? SVG[REACTION_ICON[userReaction.type]] : SVG.likeOutline}
                  <span>${userReaction ? userReaction.type : 'Like'}</span>
                </button>
                ${(post.reactions || []).length ? `<button onclick="openReactionAudit('${post.id}')" class="flex items-center ml-0.5"><span class="flex -space-x-1">${[...new Set(post.reactions.map(r => r.type))].slice(0, 3).map(t => `<span class="inline-flex bg-white rounded-full ring-2 ring-white">${SVG[REACTION_ICON[t]]}</span>`).join('')}</span><span class="pl-1.5 text-[11px] font-bold text-zinc-500">${post.reactions.length}</span></button>` : ''}
              </div>

              <!-- Opinion Box -->
              <button onclick="openOpinionBox('${post.id}')" title="Opinion Box" class="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition font-bold hover:bg-zinc-100 text-zinc-600">
                ${SVG.chat}
                <span>Opinion Box</span>
                ${(post.comments || []).length ? `<span class="px-1.5 py-0.5 rounded-md bg-zinc-100 text-[10px] font-black text-darkText">${post.comments.length}</span>` : ''}
              </button>

              <!-- Repost -->
              <button onclick="repostPost('${post.id}')" title="Repost" class="flex items-center space-x-1 px-3 py-1.5 rounded-xl transition font-bold ${reposted ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-zinc-100 text-zinc-600'}">
                ${SVG.repost}
                <span>${post.repostsCount || 0}</span>
              </button>
            </div>
            </div>
          </div>

        </div>
      `;
    }

    function renderBloodCard(post) {
      const author = getUserById(post.authorId);
      const donors = post.donors || [];
      const donated = donors.includes(currentUser.id);
      return `
        <div class="bg-white p-4 rounded-2xl border-2 border-rose-200 shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 bg-accentRed text-white font-extrabold text-xs rounded-lg">${post.bloodGroup} Needed</span>
            <span class="text-[10px] text-zinc-400 font-bold">${post.timestamp}</span>
          </div>
          <p class="text-sm sm:text-[15px] font-bold text-darkText leading-relaxed">${post.content}</p>
          <div class="text-[11px] text-zinc-600 space-y-0.5">
            <p class="flex items-center gap-1.5">${SVG.pin}<span>Location: <strong>${post.location}</strong></span></p>
            <p class="flex items-center gap-1.5">${SVG.phone}<span>Contact: <strong>${post.contact}</strong></span></p>
            <p class="text-zinc-400 mt-1">Requested by: <span ${profileAttr(author.id)} class="${author.id ? 'cursor-pointer hover:underline' : ''}">${getUserTag(author)}</span></p>
          </div>
          ${post.authorId !== currentUser.id ? `
            <div class="flex items-center gap-2">
              <button onclick="donateBlood('${post.id}')" class="flex-1 py-1.5 rounded-lg text-xs font-bold ${donated ? 'bg-zinc-200 text-zinc-700' : 'bg-accentRed text-white'}">${donated ? 'Donated (tap to undo)' : 'I donated blood'}</button>
              <button onclick="messageUser('${post.authorId}')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-darkText text-white flex items-center gap-1.5 [&_svg]:text-white">${SVG.chat}<span>Message</span></button>
            </div>` : ''}
          ${donors.length ? `<p class="text-[10px] text-zinc-500">Donors: ${donors.map(id => getUserTag(getUserById(id))).join(', ')}</p>` : ''}
        </div>
      `;
    }

    function renderMarketCard(item) {
      const seller = getUserById(item.authorId);
      const isOwner = item.authorId === currentUser.id;

      return `
        <div class="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between space-y-3">
          <div>
            ${item.image ? `<img onerror="this.style.display='none'" src="${item.image}" class="w-full h-32 object-cover rounded-xl mb-2 bg-zinc-100">` : `<div class="w-full h-32 rounded-xl mb-2 bg-zinc-100 flex items-center justify-center [&_svg]:w-10 [&_svg]:h-10 [&_svg]:text-zinc-300">${SVG.marketplace}</div>`}
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-xs text-darkText">${item.title}</h4>
              <span class="px-2 py-0.5 bg-zinc-100 border border-zinc-200 font-black text-xs rounded-lg text-darkText">${item.price}</span>
            </div>
            <p class="text-[11px] text-zinc-600 mt-1">${item.content}</p>
          </div>

          <div class="pt-2 border-t border-zinc-100 text-[10px] text-zinc-500 space-y-1">
            <p>Seller: <span ${profileAttr(seller.id)} class="${seller.id ? 'cursor-pointer hover:underline' : ''}">${getUserTag(seller)}</span></p>
            <p>Contact: ${item.contact}</p>
            ${!isOwner ? `<button onclick="messageUser('${item.authorId}')" class="mt-2 w-full py-1.5 rounded-lg bg-darkText text-white font-bold flex items-center justify-center gap-1.5 [&_svg]:text-white">${SVG.chat}<span>Message seller</span></button>` : ''}
            ${isOwner ? `
              <button onclick="toggleSoldState('${item.id}')" class="mt-2 w-full py-1.5 rounded-lg ${item.isSold ? 'bg-zinc-200 text-zinc-600' : 'bg-emerald-100 text-emerald-800'} font-bold">
                ${item.isSold ? 'Marked as Sold' : 'Mark as Sold'}
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }

    function renderPollCard(post) {
      const totalVotes = post.pollOptions.reduce((acc, opt) => acc + opt.votes.length, 0);
      return `
        <div class="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
          <h4 class="font-bold text-sm sm:text-[15px] text-darkText">${post.content}</h4>
          <div class="space-y-3">
            ${post.pollOptions.map((opt, idx) => {
              const count = opt.votes.length;
              const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
              const mine = opt.votes.includes(currentUser.id);
              return `
                <div>
                  <button onclick="votePoll('${post.id}', ${idx})" class="w-full text-left p-2.5 rounded-xl bg-zinc-50 border ${mine ? 'border-darkText' : 'border-zinc-200'} relative overflow-hidden transition hover:border-zinc-400">
                    <div class="liquid-fill ${pct ? '' : 'liquid-empty'}" data-grow="${pct}" style="width:${pct}%"></div>
                    <div class="relative flex justify-between text-xs font-bold text-darkText">
                      <span>${opt.text}</span>
                      <span>${pct}% (${count})</span>
                    </div>
                  </button>
                  ${count ? (() => {
                    const PREVIEW = 3;
                    const ordered = mine ? [currentUser.id, ...opt.votes.filter(id => id !== currentUser.id)] : opt.votes;
                    const chipHtml = id => `<span class="px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-[10px] font-bold text-zinc-600">${id === currentUser.id ? 'You' : getUserTag(getUserById(id))}</span>`;
                    const more = count - PREVIEW;
                    return `<div class="flex flex-wrap items-center gap-1 mt-1.5">${ordered.slice(0, PREVIEW).map(chipHtml).join('')}${more > 0 ? `<button onclick="openPollVoters('${post.id}', ${idx})" class="px-2 py-0.5 rounded-full bg-darkText text-white text-[10px] font-extrabold hover:bg-zinc-800 transition">+${more} more</button>` : `<button onclick="openPollVoters('${post.id}', ${idx})" class="text-[10px] font-bold text-zinc-400 underline ml-1">View all</button>`}</div>`;
                  })() : '<p class="text-[10px] text-zinc-400 mt-1">No votes yet</p>'}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    function renderPrivateChatBox() {
      const targetUser = getUserById(selectedChatUser);
      const chatKey = [currentUser.id, selectedChatUser].sort().join('_');
      const messages = privateMessages[chatKey] || [];
      const draft = chatDraft; chatDraft = "";

      return `
        <div class="pb-2 border-b border-zinc-200 flex items-center justify-between gap-2 shrink-0">
          <div class="flex items-center gap-2 min-w-0">
            ${avatarHtml(targetUser, 'w-8 h-8 text-xs', true)}
            <h4 ${profileAttr(targetUser.id)} class="font-bold text-xs text-darkText truncate ${targetUser.id ? 'cursor-pointer hover:underline' : ''}">${getUserTag(targetUser)}</h4>
          </div>
          <button onclick="if(voiceRec) finishVoice(false); selectedChatUser=null; renderApp();" class="text-xs font-bold text-accentRed shrink-0"><span class="md:hidden">&larr; Chats</span><span class="hidden md:inline">Close</span></button>
        </div>
        ${(currentUser.connectedUserIds || []).includes(selectedChatUser) ? '' : `
          <div class="mt-2 px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-2 text-[11px] font-bold text-zinc-600 shrink-0">
            <span>You are not connected yet.</span>
            ${pendingConnectRequests.some(r => r.fromUserId === currentUser.id && r.toUserId === selectedChatUser)
              ? '<span class="text-zinc-400">Request sent</span>'
              : `<button onclick="sendConnectRequest('${selectedChatUser}')" class="px-2.5 py-1 bg-darkText text-white rounded-lg">+ Connect</button>`}
          </div>`}

        <div data-chatscroll class="flex-1 min-h-0 overflow-y-auto custom-scrollbar space-y-2 p-1">
          ${messages.map(msg => {
            const isMe = msg.senderId === currentUser.id;
            return `
              <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'}">
                <div class="p-2.5 rounded-xl max-w-[85%] sm:max-w-xs break-words text-xs ${isMe ? 'bg-darkText text-white' : 'bg-zinc-100 text-darkText'}">
                  ${msg.text}
                  ${msg.image ? `<img src="${msg.image}" class="mt-1.5 rounded-lg max-h-48 w-full object-cover" alt="Shared photo">` : ''}
                  ${renderAudioMsg(msg)}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        ${renderChatPreview()}
        <div class="flex items-center space-x-2 pt-2 border-t border-zinc-200 shrink-0">
          ${voiceRec && voiceRec.target === chatKey ? voiceRecordingBar() : `
          ${chatAttachButton()}
          <input type="text" id="privChatInput" onkeydown="if(event.key==='Enter'){sendPrivateChatMessage('${chatKey}')}" value="${escapeHtml(draft)}" placeholder="Private message..." class="flex-1 p-2 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
          ${voiceMicButton(chatKey)}
          <button onclick="sendPrivateChatMessage('${chatKey}')" class="px-3 py-2 bg-darkText text-white text-xs font-bold rounded-xl">Send</button>`}
        </div>
      `;
    }

    function chatAttachButton() {
      return `
        <label class="p-2 hover:bg-zinc-100 rounded-xl cursor-pointer text-zinc-600 transition" title="Attach Image">
          ${SVG.image}
          <input type="file" accept="image/*" class="hidden" onchange="handleChatImageSelect(event)">
        </label>
      `;
    }

    function renderChatPreview() {
      if (!chatPendingImage) return '';
      return `
        <div class="px-3 py-2 bg-zinc-100 border-t border-zinc-200 flex items-center justify-between text-xs">
          <div class="flex items-center space-x-2 overflow-hidden">
            <img src="${chatPendingImage}" class="w-8 h-8 object-cover rounded-lg shrink-0">
            <span class="truncate text-[11px] text-zinc-600 font-medium">Image attached</span>
          </div>
          <button onclick="chatPendingImage=null; renderApp();" class="text-accentRed font-bold hover:underline">Remove</button>
        </div>
      `;
    }

    // --- MODAL RENDERERS ---

    function openPollVoters(postId, optIdx) { pollVotersModal = { postId, optIdx }; renderApp(); }
    function closePollVoters() { pollVotersModal = null; renderApp(); }

    function renderPollVotersModal() {
      const post = posts.find(p => p.id === pollVotersModal.postId);
      const opt = post && post.pollOptions && post.pollOptions[pollVotersModal.optIdx];
      if (!opt) return '';
      return `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50" onclick="if(event.target===this) closePollVoters()">
          <div class="bg-white rounded-2xl max-w-sm w-full p-5 space-y-4 border border-zinc-300">
            <div class="flex justify-between items-start gap-3 border-b pb-2">
              <div class="min-w-0">
                <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText">Voters (${opt.votes.length})</h3>
                <p class="text-[10px] text-zinc-500 font-semibold truncate mt-0.5">${opt.text}</p>
              </div>
              <button onclick="closePollVoters()" class="text-xs font-bold text-zinc-500 shrink-0">${SVG.close}</button>
            </div>
            <div class="space-y-1.5 max-h-72 overflow-y-auto custom-scrollbar">
              ${opt.votes.length ? opt.votes.map(id => `
                <div class="text-xs p-2.5 bg-zinc-50 rounded-xl border border-zinc-200 font-bold text-darkText">${id === currentUser.id ? 'You' : getUserTag(getUserById(id))}</div>
              `).join('') : '<p class="text-xs text-zinc-400">No votes yet.</p>'}
            </div>
          </div>
        </div>
      `;
    }

    function renderHypeAuditModal() {
      const post = posts.find(p => p.id === hypeAuditModalPostId);
      if (!post) return '';

      return `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div class="bg-white rounded-2xl max-w-sm w-full p-5 space-y-4 border border-zinc-300">
            <div class="flex justify-between items-center border-b pb-2">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText">Hype Audit Trail</h3>
              <button onclick="hypeAuditModalPostId=null; renderApp();" class="text-xs font-bold text-zinc-500">${SVG.close}</button>
            </div>
            
            <div class="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
              ${(post.hypes || []).length ? post.hypes.map(h => {
                const u = getUserById(h.userId);
                return `
                  <div class="flex items-center justify-between text-xs p-2.5 bg-hypeLime/30 rounded-xl border border-hypeLime">
                    <span class="font-bold text-darkText">${getUserTag(u)}</span>
                    <span class="px-2 py-0.5 bg-darkText text-white font-extrabold rounded-md text-[10px]">+${h.count} Hypes</span>
                  </div>
                `;
              }).join('') : '<p class="text-xs text-zinc-400">No hypes on this post yet.</p>'}
            </div>
          </div>
        </div>
      `;
    }

    function renderVuaAuditModal() {
      const post = posts.find(p => p.id === vuaAuditModalPostId);
      if (!post) return '';

      return `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div class="bg-white rounded-2xl max-w-sm w-full p-5 space-y-4 border border-zinc-300">
            <div class="flex justify-between items-center border-b pb-2">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText">Vua Audit Trail</h3>
              <button onclick="vuaAuditModalPostId=null; renderApp();" class="text-xs font-bold text-zinc-500">${SVG.close}</button>
            </div>
            
            <div class="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
              ${(post.vuas || []).length ? post.vuas.map(v => {
                const u = getUserById(v.userId);
                return `
                  <div class="flex items-center justify-between text-xs p-2.5 bg-vuaPeach/30 rounded-xl border border-vuaPeach">
                    <span class="font-bold text-darkText">${getUserTag(u)}</span>
                    <span class="px-2 py-0.5 bg-accentRed text-white font-extrabold rounded-md text-[10px]">${v.count} Vuas</span>
                  </div>
                `;
              }).join('') : '<p class="text-xs text-zinc-400">No Vuas on this post yet.</p>'}
            </div>
          </div>
        </div>
      `;
    }

    function renderReactionAuditModal() {
      const post = posts.find(p => p.id === reactionAuditModalPostId);
      if (!post) return '';

      return `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div class="bg-white rounded-2xl max-w-sm w-full p-5 space-y-4 border border-zinc-300">
            <div class="flex justify-between items-center border-b pb-2">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText">Reaction Audit Trail</h3>
              <button onclick="reactionAuditModalPostId=null; renderApp();" class="text-xs font-bold text-zinc-500">${SVG.close}</button>
            </div>
            
            <div class="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
              ${(post.reactions || []).length ? post.reactions.map(r => {
                const u = getUserById(r.userId);
                return `
                  <div class="flex items-center justify-between text-xs p-2.5 bg-zinc-50 rounded-xl border border-zinc-200">
                    <span class="font-bold text-darkText">${getUserTag(u)}</span>
                    <span class="inline-flex items-center gap-1 text-[11px] font-extrabold ${REACTION_COLOR[r.type]}">
                      ${SVG[REACTION_ICON[r.type]]}
                      ${r.type}
                    </span>
                  </div>
                `;
              }).join('') : '<p class="text-xs text-zinc-400">No reactions on this post yet.</p>'}
            </div>
          </div>
        </div>
      `;
    }


    // --- LOGIN PAGE: twinkling stars on the black panel (generated once) ---
    const AUTH_STARS_HTML = '<div aria-hidden="true" class="absolute inset-0 pointer-events-none">' + Array.from({ length: 70 }, () => {
      const sz = (Math.random() * 2 + 1).toFixed(1), x = (Math.random() * 100).toFixed(1), y = (Math.random() * 100).toFixed(1);
      const d = (Math.random() * 4).toFixed(2), t = (Math.random() * 3 + 2).toFixed(2), glow = Math.random() > 0.7 ? 'box-shadow:0 0 6px 1px rgba(255,255,255,.7);' : '';
      return `<span class="star" style="left:${x}%;top:${y}%;width:${sz}px;height:${sz}px;animation-delay:${d}s;animation-duration:${t}s;${glow}"></span>`;
    }).join('') + '</div>';

    // --- LOGIN PAGE: faint DIU campus photo behind the form (same low-opacity look the cacti had) ---
    // --- LOGIN / SIGN UP: campus building drawn as vector shapes (traced from the design), no image file ---
    const AUTH_BUILDING_PATH = "M1271 432L1256 432L1255 421L1148 421L1148 446L1146 448L1128 448L1127 441L1087 441L1085 439L1085 415L1087 413L1115 413L1117 415L1116 416L1120 418L1119 435L1124 435L1125 417L1146 417L1146 390L1128 390L1127 381L1125 379L1117 379L1115 382L1085 381L1085 356L1087 354L1115 354L1120 359L1120 377L1123 377L1123 359L1125 357L1146 357L1146 331L1128 331L1126 322L1085 321L1085 296L1087 294L1116 295L1116 298L1119 299L1120 306L1119 318L1124 318L1123 306L1125 298L1146 298L1146 271L1128 271L1127 263L1085 262L1085 237L1087 235L1116 236L1116 239L1120 241L1120 258L1123 258L1123 241L1125 239L1147 239L1146 212L1128 212L1127 204L1087 204L1085 202L1085 178L1087 176L1116 177L1117 180L1120 181L1120 199L1124 199L1125 180L1146 180L1146 154L1129 154L1127 152L1126 144L1087 145L1085 143L1085 115L1087 113L1113 113L1114 116L1118 116L1120 118L1120 138L1123 139L1124 117L1146 116L1146 85L1116 85L1115 70L1080 70L1079 52L1064 52L1062 50L1062 39L1051 39L1049 27L1036 26L1036 0L991 0L990 15L962 15L961 27L934 27L933 39L906 39L904 51L875 51L874 64L844 63L842 76L813 76L812 89L786 89L786 92L784 94L778 94L777 104L746 104L744 118L723 118L723 167L721 169L623 169L622 142L598 142L596 122L564 122L563 142L519 143L519 167L517 169L352 169L351 94L139 94L140 147L138 149L33 149L26 147L26 133L0 133L0 174L18 174L20 176L20 611L1085 611L1086 585L1118 585L1119 587L1114 589L1114 611L1250 611L1250 455L1271 454ZM835 557L856 559L862 561L861 591L834 587ZM271 552L302 551L303 579L301 581L272 581ZM213 550L243 549L244 578L214 579ZM966 544L997 543L998 573L967 574ZM912 544L941 543L942 573L913 574L911 560ZM351 531L384 530L385 557L352 558ZM105 530L137 529L138 557L106 558ZM65 529L84 529L86 531L86 549L84 558L64 557ZM1085 528L1114 527L1117 532L1117 550L1124 550L1125 530L1146 530L1148 532L1148 560L1146 562L1128 562L1126 560L1127 556L1087 556L1085 554ZM838 516L860 519L862 521L861 552L838 549L836 547L836 518ZM704 508L729 509L736 511L735 592L703 591ZM632 508L665 509L664 592L631 591L630 510ZM566 508L597 508L599 510L598 592L565 591ZM534 508L535 591L504 592L503 513L513 510ZM777 507L783 506L793 508L807 508L809 537L807 539L778 538ZM474 506L475 537L464 539L445 539L443 537L443 511L445 509ZM270 500L272 498L301 498L303 500L302 528L272 529ZM213 497L215 495L242 495L244 497L244 524L226 526L214 525ZM941 486L942 517L913 518L912 488ZM966 488L968 486L997 485L999 487L999 514L997 516L968 518L966 516ZM105 475L137 474L138 502L106 503ZM65 474L84 474L86 476L86 499L84 503L64 502ZM351 474L384 473L385 503L378 505L353 505L351 503ZM1085 472L1087 470L1115 470L1117 472L1116 474L1119 476L1119 493L1122 493L1124 495L1123 483L1125 474L1147 474L1148 502L1128 503L1127 498L1124 497L1087 498L1085 496ZM837 465L862 469L861 500L839 498L836 496ZM778 454L808 458L807 488L780 486L777 484ZM474 454L475 484L473 486L445 488L443 486L443 459L447 457ZM271 447L301 446L303 448L302 476L272 477L270 456ZM703 446L705 444L739 446L741 448L741 475L739 477L704 475ZM534 444L535 474L504 477L503 448L510 446ZM631 444L666 443L667 472L632 473L630 465ZM565 444L598 443L599 471L597 473L567 473L565 471ZM213 443L243 442L244 471L214 472ZM941 431L942 461L913 463L911 434L913 432ZM966 431L968 429L998 428L999 457L997 459L968 460L966 454ZM351 420L384 419L385 447L352 448ZM105 420L137 419L138 447L106 448ZM65 419L85 420L86 446L84 448L64 447ZM837 414L860 417L862 419L861 449L838 446L836 444ZM779 402L805 405L809 407L808 436L779 434L777 432L777 404ZM474 402L475 433L455 436L444 436L444 407L449 405ZM271 395L301 394L303 396L303 423L301 425L272 425ZM703 392L716 391L740 393L741 423L736 424L704 421ZM534 391L535 420L528 422L504 424L503 395L510 393ZM631 390L666 389L667 418L632 419L630 417ZM565 390L598 389L599 418L566 419ZM213 390L243 389L244 418L214 419ZM941 375L942 405L935 407L913 407L912 378ZM997 369L999 371L999 400L968 404L966 374L972 371ZM105 365L137 364L138 392L106 393ZM65 364L86 365L86 386L84 393L64 392ZM351 365L353 363L384 364L385 392L352 393ZM837 362L860 365L862 367L861 397L836 393ZM778 351L807 354L809 356L809 376L807 385L779 382L777 380ZM474 350L475 380L470 382L445 385L443 383L443 356L449 353ZM271 342L301 341L303 343L303 370L301 372L272 372L270 370ZM703 338L713 337L740 340L741 369L738 371L728 369L704 368ZM534 337L535 367L505 371L503 369L503 342L512 339ZM888 337L901 336L903 338L902 343L889 343ZM631 336L666 335L667 363L648 365L632 364ZM565 336L598 335L599 363L597 365L567 365L565 363ZM213 336L243 335L244 364L214 365ZM860 326L862 324L885 324L886 336L874 337L873 331L862 331L860 329ZM941 319L942 349L937 351L913 353L911 351L912 323L915 321ZM998 312L999 341L997 343L968 346L967 316L969 314ZM401 330L402 320L420 319L421 309L457 310L456 314L422 320L422 326L420 328L409 328L406 331ZM351 310L384 309L385 334L392 329L400 329L400 337L390 338L390 342L388 344L385 344L383 342L383 338L352 338ZM105 310L137 309L138 337L136 339L107 339L105 337ZM65 309L86 310L86 336L84 338L64 337ZM271 289L301 288L303 290L302 318L272 319ZM827 286L826 310L799 311L791 309L792 288L818 285ZM213 283L243 282L244 310L242 312L215 312L213 310ZM885 274L886 303L881 305L854 308L853 279L858 277ZM941 263L942 293L940 295L913 298L911 292L911 269L913 267ZM351 255L383 254L385 256L385 282L352 283ZM997 253L999 255L999 283L997 285L968 289L967 258ZM695 255L698 253L731 254L732 282L697 283L695 272ZM629 255L631 253L664 254L665 282L630 283ZM562 254L596 253L598 255L598 282L563 283ZM492 255L494 253L528 253L530 255L530 282L493 283ZM420 255L422 253L456 253L457 282L422 283L420 281ZM105 255L109 253L136 253L138 255L138 282L106 283ZM65 254L84 253L86 255L86 277L84 283L64 282ZM271 236L301 235L303 242L303 263L301 265L272 265ZM827 233L826 261L799 265L791 264L792 236L820 232ZM213 230L215 228L242 228L244 230L244 257L214 258ZM885 219L886 248L884 250L854 254L853 225L858 223ZM941 206L943 208L942 237L938 239L913 243L911 238L912 212ZM695 201L697 199L731 199L732 228L697 229L695 227ZM630 200L664 199L665 228L631 229ZM562 200L597 199L598 228L563 229ZM492 200L528 199L530 201L530 228L493 229ZM420 201L422 199L456 199L457 228L422 229L420 227ZM351 200L384 199L385 227L352 228ZM105 200L107 198L136 198L138 200L138 226L136 228L106 227ZM65 199L84 198L86 200L84 227L66 228L64 226ZM997 193L999 195L999 224L994 227L968 231L967 200ZM271 181L301 180L303 188L303 209L301 211L272 211ZM827 178L828 205L826 207L799 211L791 210L792 181L809 180L822 177ZM213 176L215 174L242 174L244 176L244 203L214 204ZM885 163L886 192L880 195L854 199L853 169ZM941 148L943 150L943 179L940 181L913 186L911 184L911 156L914 154L919 154ZM998 134L999 164L996 166L968 172L967 141ZM831 122L830 150L813 152L812 155L808 156L791 156L792 128L811 127L825 122ZM271 122L301 121L303 123L303 149L301 151L272 151ZM213 122L243 121L244 149L242 151L215 151L213 149ZM886 106L888 112L887 134L884 136L854 143L853 113L868 111ZM999 64L998 94L982 100L963 100L962 106L961 95L950 94L948 115L930 119L928 122L912 121L911 95L913 93L925 93L944 86L961 87L961 76L965 74L982 74L983 62L997 62Z";
    function authBuildingSvg(W, H) {
      // same exact proportions everywhere (never stretched), standing on the bottom edge.
      // desktop: whole building across the full width; phone: building fills the bottom 60% of the screen (sides trimmed)
      const phone = W < 768;
      const par = phone ? 'xMidYMax slice' : 'xMidYMax meet';
      const size = phone ? 'position:absolute;left:0;bottom:0;width:100%;height:60%' : 'display:block;width:100%;height:100%';
      // phone: show the middle of the building
      const vw = phone ? Math.min(1272, 612 * W / (0.6 * H)) : 1272;
      const vx = phone ? Math.max(0, Math.min(1272 - vw, 636 - vw / 2)) : 0;
      return `<svg viewBox="${vx} 0 ${vw} 612" preserveAspectRatio="${par}" style="${size}"><path fill="#4b4b4b" fill-rule="evenodd" d="${AUTH_BUILDING_PATH}"/></svg>`;
    }
    (function () {
      const st = document.createElement('style');
      st.textContent = '.auth-bg{position:fixed;inset:0;z-index:0;pointer-events:none;user-select:none;opacity:.16}'
        + '.site-bg{position:fixed;left:0;top:0;width:100%;height:var(--app-h,100dvh);z-index:-1;pointer-events:none;user-select:none;opacity:.07}';
      document.head.appendChild(st);
      // same building as the login page, kept behind the whole site (outside #app so re-renders never touch it)
      const sb = document.createElement('div');
      sb.className = 'site-bg'; sb.setAttribute('aria-hidden', 'true');
      sb.innerHTML = authBuildingSvg(window.innerWidth, window.innerHeight);
      document.body.insertBefore(sb, document.body.firstChild);
      const redraw = () => document.querySelectorAll('.auth-bg, .site-bg').forEach(e => { e.innerHTML = authBuildingSvg(window.innerWidth, window.innerHeight); });
      window.addEventListener('resize', redraw);
    })();
    const authBgHtml = () => `<div aria-hidden="true" class="auth-bg">${authBuildingSvg(window.innerWidth, window.innerHeight)}</div>`;

    // --- LOGIN PAGE: matrix-style decode intro (headline, then description, then the credit line last) ---
    function authMatrixIntro() {
      const els = [...document.querySelectorAll('#app [data-mx]')];
      if (!els.length) return;
      if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      // the text's own letters glitch: a letter becomes another letter (same case), digits stay digits, punctuation stays put
      const rnd = ch => {
        if (/[a-z]/.test(ch)) return String.fromCharCode(97 + Math.floor(Math.random() * 26));
        if (/[A-Z]/.test(ch)) return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        if (/[0-9]/.test(ch)) return String.fromCharCode(48 + Math.floor(Math.random() * 10));
        return ch;
      };
      const SPLIT = '-1.5px 0 rgba(255,45,85,.85), 1.5px 0 rgba(0,229,255,.85)';   // red / cyan RGB-split
      const plans = els.map(el => {
        const orig = el.innerHTML, chars = [], nodes = [];
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(n => {
          if (!n.nodeValue.trim()) return;
          const frag = document.createDocumentFragment();
          n.nodeValue.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const w = document.createElement('span');
            w.style.cssText = 'display:inline-block;white-space:nowrap';
            for (const ch of part) { const c = document.createElement('span'); c.textContent = ch; c._o = ch; w.appendChild(c); chars.push(c); }
            frag.appendChild(w);
          });
          n.parentNode.replaceChild(frag, n);
        });
        chars.forEach(c => { c._w = c.getBoundingClientRect().width; });          // keep every character's width so nothing jumps
        chars.forEach(c => { c.style.cssText = 'display:inline-block;text-align:center;width:' + c._w + 'px'; });
        return { el, orig, chars, group: +el.dataset.mx };
      });
      // timing: headline first, description a little after, credit line only once the description is done
      const dur = p => Math.min(1500, 500 + p.chars.length * 14);
      const tail = g => Math.max(0, ...plans.filter(p => p.group === g).map(p => p.start + dur(p)));
      plans.filter(p => p.group === 0).forEach(p => { p.start = 0; });
      plans.filter(p => p.group === 1).forEach(p => { p.start = 450; });
      const lateStart = tail(1) + 150;
      plans.filter(p => p.group === 2).forEach(p => { p.start = lateStart; });
      plans.filter(p => p.group === 9).forEach(p => { p.start = +p.el.dataset.delay || 0; });
      const PER = 34, GARBLE = 90;   // credit line: typed in char by char with a green cursor
      const MX = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ0123456789';
      const mrnd = () => MX[Math.floor(Math.random() * MX.length)];
      const SYM = '#@%&?/<>*+=';
      plans.forEach(p => {
        const d = dur(p), n = p.chars.length || 1;
        p.mode = p.group === 9 ? 'matrix' : p.group === 2 ? 'type' : 'glitch';
        if (p.mode === 'matrix') p.chars.forEach((c, i) => { c._at = 150 + (i / n) * 520 + Math.random() * 150; c.textContent = mrnd(); });
        else if (p.mode === 'type') p.chars.forEach(c => { c.style.visibility = 'hidden'; });
        else p.chars.forEach((c, i) => { c._at = (i / n) * d * 0.85 + Math.random() * d * 0.15; c.textContent = rnd(c._o); });
        if (p.start > 0 && p.mode !== 'matrix') p.el.style.opacity = '0';
      });
      const T0 = performance.now();
      const frame = now => {
        const t = now - T0; let alive = false;
        plans.forEach(p => {
          if (p.done) return;
          if (t < p.start) { alive = true; return; }
          if (!p.shown) { p.shown = true; if (p.mode !== 'matrix') p.el.style.opacity = '1'; if (p.mode === 'glitch') p.chars.forEach(c => { c.style.textShadow = SPLIT; }); }
          const rel = t - p.start;
          if (p.mode === 'type') {
            let left = 0;
            p.chars.forEach((c, i) => {
              if (c._done) return;
              const ta = i * PER;
              if (rel < ta) { left++; return; }
              if (rel >= ta + GARBLE) { c.textContent = c._o; c.style.visibility = 'visible'; c.style.color = ''; c.style.boxShadow = ''; c._done = true; return; }
              left++;
              c.style.visibility = 'visible'; c.style.color = '#16a34a'; c.style.boxShadow = '2px 0 0 #16a34a';   // green terminal cursor on the char being typed
              if (now - (c._last || 0) > 40) { c.textContent = SYM[Math.floor(Math.random() * SYM.length)]; c._last = now; }
            });
            if (left) { alive = true; return; }
            p.el.innerHTML = p.orig; p.done = true;
            return;
          }
          if (p.mode === 'matrix') {   // button label: green matrix glyphs, settle into the real text while the box is still green
            let left = 0;
            p.chars.forEach(c => {
              if (c._done) return;
              if (rel >= c._at) { c.textContent = c._o; c._done = true; return; }
              left++;
              if (now - (c._last || 0) > 50) { c.textContent = mrnd(); c._last = now; }
            });
            if (!left) { p.el.innerHTML = p.orig; p.done = true; } else alive = true;
            return;
          }
          let left = 0;
          p.chars.forEach(c => {
            if (c._done) return;
            if (rel >= c._at) { c.textContent = c._o; c.style.transform = ''; c.style.textShadow = ''; c._done = true; return; }
            left++;
            if (now - (c._last || 0) > 50) {
              c.textContent = Math.random() < 0.35 ? c._o : rnd(c._o);   // keeps flashing the real letter so it stays readable
              c.style.transform = 'translate(' + ((Math.random() - 0.5) * 3).toFixed(1) + 'px,' + ((Math.random() - 0.5) * 2).toFixed(1) + 'px)' + (Math.random() < 0.2 ? ' skewX(-14deg)' : '');
              c._last = now;
            }
          });
          if (!left) { p.el.innerHTML = p.orig; p.done = true; } else alive = true;
        });
        if (alive) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }

    function renderAuthScreen() {
      // Home page: headline + Log in / Sign up buttons in one column. The form opens as its own page.
      const reg = authMode === 'register';
      const inp = 'w-full px-0 py-2.5 bg-transparent rounded-none border-0 border-b-2 border-zinc-500 text-darkText placeholder:text-zinc-500 outline-none focus:border-darkText text-[15px] font-semibold transition-colors';
      const lab = 'block text-[11px] font-extrabold uppercase tracking-widest text-zinc-700';
      return `
        <div class="auth-scroll h-full overflow-y-auto relative bg-white">
          ${authBgHtml().replace('class="auth-bg"', 'class="auth-bg" style="opacity:' + (authMode === 'login' || authMode === 'register' ? '.06' : '.16') + '"')}
          <div class="relative z-10 min-h-full w-full flex flex-col gap-8 p-6 md:p-14">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-accentLime text-darkText flex items-center justify-center">${SVG.logo}</div>
                <span data-mx="0" class="font-extrabold text-lg text-darkText">DIU Connect Hub</span>
            </div>
            ${authMode !== 'login' && authMode !== 'register' ? `
            <div class="w-full max-w-2xl mx-auto flex flex-col gap-8 py-4 md:pt-[8vh]">
              <div>
                <h1 data-mx="0" class="text-4xl md:text-6xl font-black leading-tight tracking-tight text-darkText">Your campus, connected.</h1>
                <p data-mx="1" class="mt-4 text-sm text-zinc-600 max-w-sm">Feed, confessions, blood donors, a student marketplace and chat, all in one place for Daffodil International University.</p>
                <p data-mx="2" class="mt-5 text-xs text-zinc-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-darkText shrink-0">${SVG.code}</span><span>Created by Al Sahariar Sakib <a href="https://www.facebook.com/itsknight" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:underline">&lt;knight/&gt;</a> &bull; Dept. of CSE, DIU</span></p>
              </div>
              <div class="w-full max-w-xs space-y-3">
                <button onclick="setAuthMode('login')" data-mx="9" data-delay="900" style="animation:mxBoxGreen .95s steps(1,end) .9s backwards" class="w-full py-3.5 bg-black text-white font-bold rounded-full hover:bg-zinc-800 transition">Log in</button>
                <button onclick="setAuthMode('register')" data-mx="9" data-delay="1200" style="animation:mxBoxGreen .95s steps(1,end) 1.2s backwards" class="w-full py-3.5 bg-white text-darkText font-bold rounded-full border-2 border-darkText hover:bg-zinc-50 transition">Sign up</button>
              </div>
            </div>
            ` : `
            <div class="w-full max-w-md mx-auto py-2 md:pt-[4vh] space-y-4">
              <button type="button" onclick="setAuthMode('home')" class="px-3 py-1.5 rounded-xl bg-white/80 border border-zinc-400 text-xs font-bold text-darkText hover:bg-zinc-100 transition">&larr; Back</button>
              <form onsubmit="return submitAuth(event)" class="w-full space-y-5" novalidate>
                <div class="flex gap-6 text-sm font-extrabold">
                  <button type="button" onclick="setAuthMode('login')" class="pb-1 border-b-2 ${!reg ? 'border-darkText text-darkText' : 'border-transparent text-zinc-500'}">Log in</button>
                  <button type="button" onclick="setAuthMode('register')" class="pb-1 border-b-2 ${reg ? 'border-darkText text-darkText' : 'border-transparent text-zinc-500'}">Sign up</button>
                </div>
                <div>
                  <h2 class="text-xl font-extrabold text-darkText">${reg ? 'Create your account' : 'Welcome back'}</h2>
                  <p class="text-sm text-zinc-600 font-semibold mt-1">${reg ? 'Join the DIU student network.' : 'Log in with your username or email.'}</p>
                </div>
                ${reg ? `
                  <div><label class="${lab}">Full name</label><input name="name" class="${inp}" autocomplete="name"></div>
                  <div><label class="${lab}">Username</label><input name="username" class="${inp}" autocomplete="username" placeholder="name_cse"></div>
                  <div><label class="${lab}">Email</label><input name="email" type="email" class="${inp}" autocomplete="email"></div>
                  <div class="grid grid-cols-2 gap-3 items-end">
                    <div><label class="${lab}">Department</label><select name="dept" class="${inp}">${DEPARTMENTS.map(d => `<option>${d}</option>`).join('')}</select></div>
                    <div><label class="${lab}">Blood group</label><select name="blood" class="${inp}">${BLOOD_GROUPS.map(b => `<option>${b}</option>`).join('')}</select></div>
                  </div>
                  <div class="grid grid-cols-2 gap-3 items-end">
                    <div><label class="${lab} whitespace-nowrap">Password</label><input name="password" type="password" class="${inp}" autocomplete="new-password"></div>
                    <div><label class="${lab} whitespace-nowrap">Confirm<span class="hidden sm:inline"> password</span></label><input name="confirm" type="password" class="${inp}" autocomplete="new-password"></div>
                  </div>
                  <label class="flex items-center gap-2 text-xs font-bold text-zinc-700"><input type="checkbox" name="donor" checked class="accent-darkText"> I can donate blood</label>
                ` : `
                  <div><label class="${lab}">Username or email</label><input name="login" class="${inp}" autocomplete="username"></div>
                  <div><label class="${lab}">Password</label><input name="password" type="password" class="${inp}" autocomplete="current-password"></div>
                `}
                <p id="authErr" role="alert" class="text-xs font-bold text-accentRed min-h-[16px]"></p>
                <button class="w-full py-3.5 bg-black text-white font-bold rounded-full hover:bg-zinc-800 transition">${reg ? 'Create account' : 'Log in'}</button>
              </form>
            </div>
            `}
          </div>
        </div>
      `;
    }

    function renderEditProfileModal() {
      const inp = 'w-full p-2.5 bg-zinc-50 rounded-xl border border-zinc-200 outline-none text-xs';
      const lab = 'font-bold block mb-1 text-zinc-700 text-xs';
      return `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div class="bg-white rounded-2xl max-w-md w-full p-5 space-y-3 border border-zinc-300 max-h-full overflow-y-auto">
            <div class="flex justify-between items-center border-b pb-2">
              <h3 class="font-extrabold text-sm text-darkText">Edit profile</h3>
              <button onclick="profileEditing=false; renderApp();" class="text-zinc-500" aria-label="Close">${SVG.close}</button>
            </div>
            <div class="flex items-center gap-4">
              <div id="profAvatarPrev" class="w-20 h-20 rounded-full overflow-hidden bg-darkText text-white flex items-center justify-center shrink-0 border border-zinc-200">${currentUser.avatar ? `<img src="${currentUser.avatar}" alt="Profile picture" class="w-full h-full object-cover">` : `<span class="font-black text-2xl">${escapeHtml((currentUser.name || '?').charAt(0).toUpperCase())}</span>`}</div>
              <div class="flex flex-col gap-2">
                <label class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-darkText text-white text-xs font-bold cursor-pointer hover:bg-zinc-800 transition">${SVG.camera}<span>Upload photo</span><input type="file" accept="image/*" class="hidden" onchange="handleProfileAvatarSelect(event)"></label>
                <button type="button" id="profAvatarRemove" onclick="removeProfileAvatar()" class="${currentUser.avatar ? '' : 'hidden'} px-3 py-2 rounded-xl border border-zinc-300 text-xs font-bold text-accentRed hover:bg-rose-50 transition">Remove photo</button>
              </div>
            </div>
            <div><label class="${lab}">Full name</label><input id="profName" value="${currentUser.name}" class="${inp}"></div>
            <div><label class="${lab}">Username</label><input id="profUser" value="${currentUser.username}" class="${inp}"></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="${lab}">Department</label><select id="profDept" class="${inp}">${DEPARTMENTS.map(d => `<option ${d === currentUser.dept ? 'selected' : ''}>${d}</option>`).join('')}</select></div>
              <div><label class="${lab}">Blood group</label><select id="profBlood" class="${inp}">${BLOOD_GROUPS.map(b => `<option ${b === currentUser.bloodGroup ? 'selected' : ''}>${b}</option>`).join('')}</select></div>
            </div>
            <label class="flex items-center gap-2 text-xs font-bold text-zinc-700"><input type="checkbox" id="profDonor" ${currentUser.isDonor ? 'checked' : ''} class="accent-darkText"> Available blood donor</label>
            <div><label class="${lab}">Bio</label><textarea id="profBio" rows="3" class="${inp}">${currentUser.bio || ''}</textarea></div>
            <p id="profErr" class="text-xs font-bold text-accentRed min-h-[14px]"></p>
            <div class="flex gap-2">
              <button onclick="profileEditing=false; renderApp();" class="flex-1 py-2.5 border border-zinc-300 rounded-xl text-xs font-bold hover:bg-zinc-100">Cancel</button>
              <button onclick="saveProfileChanges()" class="flex-1 py-2.5 bg-darkText text-white rounded-xl text-xs font-bold hover:bg-zinc-800">Save changes</button>
            </div>
          </div>
        </div>
      `;
    }

    function renderRepostBanner(post) {
      const rs = post.reposts || [];
      if (!rs.length) return '';
      const names = rs.slice(0, 2).map(r => r.userId === currentUser.id ? 'You' : getUserTag(getUserById(r.userId)));
      const more = (post.repostsCount || 0) - names.length;
      return `<div class="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 -mt-1"><span class="text-emerald-600 inline-flex">${SVG.repost}</span><span>Reposted by ${names.join(', ')}${more > 0 ? ' and ' + more + ' other' + (more > 1 ? 's' : '') : ''}</span></div>`;
    }

    // --- INTERACTION LOGIC ---

    function submitStandardPost(type) {
      const input = document.getElementById("postInputText");
      if (!input || (!input.value.trim() && !postPendingImage)) return;

      playSfx("publish"); posts.unshift({
        id: "p_" + Date.now(),
        authorId: currentUser.id,
        type: type,
        content: input.value.trim(),
        image: postPendingImage,
        hypes: [],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 0,
        timestamp: "Just now"
      });

      postPendingImage = null;
      renderApp();
    }

    function submitConfessionPost() {
      const input = document.getElementById("confessionInput");
      const anonEl = document.getElementById("anonToggle");
      const isAnon = anonEl ? anonEl.checked : true;

      if (!input || !input.value.trim()) return;

      playSfx("publish"); posts.unshift({
        id: "p_" + Date.now(),
        authorId: currentUser.id,
        type: "confession",
        content: input.value.trim(),
        image: null,
        isConfessionAnonymous: isAnon,
        hypes: [],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 0,
        timestamp: "Just now"
      });

      renderApp();
    }

    function submitBloodPost() {
      const group = document.getElementById("bloodGroupReq").value;
      const location = document.getElementById("bloodLocation").value;
      const contact = document.getElementById("bloodContact").value;
      const details = document.getElementById("bloodDetails").value;

      if (!location || !contact) return;

      playSfx("publish"); posts.unshift({
        id: "p_" + Date.now(),
        authorId: currentUser.id,
        type: "blood",
        bloodGroup: group,
        location: location,
        contact: contact,
        content: details || `Urgent blood required (${group}).`,
        hypes: [],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 0,
        timestamp: "Just now"
      });

      renderApp();
    }

    function submitMarketPost() {
      const title = document.getElementById("mTitle").value;
      const price = document.getElementById("mPrice").value;
      const contact = document.getElementById("mContact").value;
      const desc = document.getElementById("mDesc").value;

      if (!title.trim() || !price.trim()) { showToast("Please enter the item name and price"); return; }

      playSfx("publish"); posts.unshift({
        id: "p_" + Date.now(),
        authorId: currentUser.id,
        type: "marketplace",
        title: title,
        price: price,
        contact: contact,
        content: desc || "Campus marketplace item.",
        isSold: false,
        image: marketPendingImage,
        hypes: [],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 0,
        timestamp: "Just now"
      });

      marketPendingImage = null;
      renderApp();
    }

    let pollFormOpen = false, pollDraftQ = "", pollDraftOpts = ["", ""];
    function addPollOpt() { pollDraftOpts.push(""); renderApp(); setTimeout(() => { const el = document.getElementById("pollOpt" + (pollDraftOpts.length - 1)); if (el) el.focus(); }, 0); }
    function removePollOpt(i) { pollDraftOpts.splice(i, 1); renderApp(); }
    function submitPollPost() {
      const q = pollDraftQ.trim();
      const opts = pollDraftOpts.map(o => o.trim()).filter(Boolean);
      if (!q) return showToast("Write a poll question");
      if (opts.length < 2) return showToast("Add at least 2 options");

      playSfx("publish"); posts.unshift({
        id: "p_" + Date.now(),
        authorId: currentUser.id,
        type: "poll",
        content: q,
        pollOptions: opts.map(t => ({ text: t, votes: [] })),
        hypes: [],
        vuas: [],
        reactions: [],
        comments: [],
        repostsCount: 0,
        timestamp: "Just now"
      });
      pollDraftQ = ""; pollDraftOpts = ["", ""]; pollFormOpen = false;
      renderApp();
    }

    function floatMsg(ev, text, cls) {
      if (!ev) return;
      const el = document.createElement("span");
      el.className = "fixed font-extrabold text-xs px-2.5 py-1 rounded-lg shadow-lg pointer-events-none animate-float z-50 " + cls;
      el.innerText = text;
      el.style.left = `${Math.max(8, ev.clientX - 60)}px`;
      el.style.top = `${ev.clientY - 30}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1400);
    }

    function addHype(postId, ev) {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      let record = post.hypes.find(h => h.userId === currentUser.id);
      // Nijer post-e matro ekbar hype; onner post-e unlimited
      if (post.authorId === currentUser.id && record && record.count >= 1) {
        playSfx("deny");
        floatMsg(ev, "You can only hype your own post once", "bg-darkText text-white");
        return;
      }
      playSfx("vua");
      if (!record) {
        record = { userId: currentUser.id, count: 1 };
        post.hypes.push(record);
      } else {
        record.count++;
      }

      // Visual feedback floating animation
      if (ev) {
        const floatEl = document.createElement("span");
        floatEl.className = "fixed font-extrabold text-sm text-emerald-600 pointer-events-none animate-float z-50";
        floatEl.innerText = "+1 Hype!";
        floatEl.style.left = `${ev.clientX}px`;
        floatEl.style.top = `${ev.clientY - 10}px`;
        document.body.appendChild(floatEl);
        setTimeout(() => floatEl.remove(), 600);
      }

      renderApp();
    }

    function addVua(postId, ev) {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      let record = post.vuas.find(v => v.userId === currentUser.id);
      // Nijer post-e matro ekbar vua; onner post-e unlimited
      if (post.authorId === currentUser.id && record && record.count >= 1) {
        playSfx("deny");
        floatMsg(ev, "You can only vua your own post once", "bg-darkText text-white");
        return;
      }
      playSfx("hype");
      if (!record) {
        record = { userId: currentUser.id, count: 1 };
        post.vuas.push(record);
      } else {
        record.count++;
      }

      if (ev) {
        const floatEl = document.createElement("span");
        floatEl.className = "fixed font-extrabold text-sm text-accentRed pointer-events-none animate-float z-50";
        floatEl.innerText = "+1 Vua!";
        floatEl.style.left = `${ev.clientX}px`;
        floatEl.style.top = `${ev.clientY - 10}px`;
        document.body.appendChild(floatEl);
        setTimeout(() => floatEl.remove(), 600);
      }

      renderApp();
    }

    function applyReaction(postId, reactionType) {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      const idx = post.reactions.findIndex(r => r.userId === currentUser.id);
      const removing = idx !== -1 && post.reactions[idx].type === reactionType;
      playSfx(removing ? "react_off" : "react_" + String(reactionType).toLowerCase());
      if (idx !== -1) {
        if (removing) post.reactions.splice(idx, 1);
        else post.reactions[idx].type = reactionType;
      } else {
        post.reactions.push({ userId: currentUser.id, type: reactionType });
      }

      hideTrays();
      renderApp();
    }

    let lastPointerType = "mouse";
    let rSuppressClick = false;
    document.addEventListener("pointerdown", e => { lastPointerType = e.pointerType || "mouse"; }, true);
    document.addEventListener("pointermove", e => { lastPointerType = e.pointerType || "mouse"; }, true);
    const trayTimers = {};

    // Tap = Like (click). Hold = open reaction tray; lift over an emoji to pick it, or tap an emoji in the tray.
    function reactDown(ev, postId) {
      clearTimeout(rTimer);
      rLong = false; rHover = null; rSuppressClick = false;
      rTimer = setTimeout(() => {
        rLong = true;
        hideTrays();
        const tray = document.getElementById("tray-" + postId);
        if (tray) tray.classList.remove("hidden");
      }, 400);
    }

    function reactUp(ev, postId) {
      clearTimeout(rTimer);
      if (!rLong) return;
      rSuppressClick = true;
      rLong = false;
      const el = document.elementFromPoint(ev.clientX, ev.clientY);
      const btn = el ? el.closest("[data-rtype]") : null;
      if (btn) applyReaction(postId, btn.getAttribute("data-rtype"));
    }

    function reactClick(ev, postId) {
      if (rSuppressClick) { rSuppressClick = false; return; }
      const tray = document.getElementById("tray-" + postId);
      if (lastPointerType === "touch" && tray && !tray.classList.contains("hidden")) { hideTrays(); return; }
      applyReaction(postId, "Like");
    }

    function reactCancel() { clearTimeout(rTimer); rLong = false; }

    function trayHover(postId, state) {
      if (lastPointerType === "touch") return; // ignore emulated mouse events from touch
      clearTimeout(trayTimers[postId]);
      if (state) {
        hideTrays();
        const tray = document.getElementById("tray-" + postId);
        if (tray) tray.classList.remove("hidden");
      } else {
        trayTimers[postId] = setTimeout(() => {
          const t = document.getElementById("tray-" + postId);
          if (t) t.classList.add("hidden");
        }, 220);
      }
    }

    function openHypeAudit(postId) { hypeAuditModalPostId = postId; renderApp(); }
    function openVuaAudit(postId) { vuaAuditModalPostId = postId; renderApp(); }
    function openReactionAudit(postId) { reactionAuditModalPostId = postId; renderApp(); }

    // --- OPINION BOX (Facebook-style comments + replies) ---
    let opinionReplyTo = null;   // { postId, parentId, name }
    let opinionExpanded = {};    // commentId -> replies visible

    function avatarHtml(user, cls, link) {
      const ch = ((user && user.name) || "?").charAt(0).toUpperCase();
      const canLink = link && user && user.id;
      if (user && user.avatar) return `<img ${canLink ? profileAttr(user.id) : ''} src="${user.avatar}" alt="" class="${cls} rounded-full object-cover shrink-0${canLink ? ' cursor-pointer' : ''}">`;
      return `<div ${canLink ? profileAttr(user.id) : ''} class="${cls} rounded-full bg-darkText text-white flex items-center justify-center font-black shrink-0${canLink ? ' cursor-pointer' : ''}">${ch}</div>`;
    }

    function openOpinionBox(postId) {
      playSfx("opinion");
      opinionBoxPostId = postId;
      opinionReplyTo = null;
      renderApp();
      const el = document.getElementById(`commentInput-${postId}`);
      if (el && lastPointerType !== "touch") el.focus();
    }

    function closeOpinionBox() { opinionBoxPostId = null; opinionReplyTo = null; renderApp(); }

    function startReply(postId, commentId) {
      const post = posts.find(p => p.id === postId);
      const c = post && post.comments.find(x => x.id === commentId);
      if (!c) return;
      const parentId = c.parentId || c.id;
      const u = getUserById(c.userId) || { name: "user" };
      opinionReplyTo = { postId, parentId, name: u.name };
      opinionExpanded[parentId] = true;
      rerenderKeepInputs();
      const el = document.getElementById(`commentInput-${postId}`);
      if (el) {
        if (c.parentId && !el.value) el.value = "@" + u.name + " ";
        el.focus();
        el.setSelectionRange(el.value.length, el.value.length);
      }
    }

    function cancelReply() { opinionReplyTo = null; rerenderKeepInputs(); }

    function toggleReplies(commentId) {
      opinionExpanded[commentId] = !opinionExpanded[commentId];
      rerenderKeepInputs();
    }

    function toggleCommentLike(postId, commentId) {
      const post = posts.find(p => p.id === postId);
      const c = post && post.comments.find(x => x.id === commentId);
      if (!c) return;
      if (!c.likes) c.likes = [];
      const i = c.likes.indexOf(currentUser.id);
      if (i === -1) c.likes.push(currentUser.id); else c.likes.splice(i, 1);
      rerenderKeepInputs();
    }

    function deleteComment(postId, commentId) {
      if (!confirm("Delete this comment?")) return;
      const post = posts.find(p => p.id === postId);
      if (!post) return;
      post.comments = post.comments.filter(c => c.id !== commentId && c.parentId !== commentId);
      if (opinionReplyTo && opinionReplyTo.parentId === commentId) opinionReplyTo = null;
      rerenderKeepInputs();
    }

    function renderCommentItem(post, c, isReply) {
      const u = getUserById(c.userId) || { name: "Unknown user", dept: "" };
      const likes = c.likes || [];
      const liked = likes.includes(currentUser.id);
      const mine = c.userId === currentUser.id;
      const replies = isReply ? [] : post.comments.filter(r => r.parentId === c.id);
      const open = !!opinionExpanded[c.id];
      return `
        <div id="cm-${c.id}" class="flex gap-2">
          ${avatarHtml(u, isReply ? 'w-7 h-7 text-[11px]' : 'w-9 h-9 text-sm', true)}
          <div class="min-w-0 flex-1">
            <div class="relative inline-block max-w-full ${likes.length ? 'mb-2' : ''}">
              <div class="bg-zinc-100 rounded-2xl px-3 py-2">
                <p ${profileAttr(u.id)} class="font-bold text-[12px] text-darkText leading-tight ${u.id ? 'cursor-pointer hover:underline' : ''}">${u.name}${deptBadge(u.dept)}</p>
                <p class="text-xs text-zinc-800 break-words mt-0.5">${c.text}</p>
              </div>
              ${likes.length ? `<span class="absolute -bottom-2 -right-2 flex items-center gap-0.5 bg-white rounded-full shadow border border-zinc-200 pl-1 pr-1.5 py-0.5 text-[10px] font-bold text-zinc-600 [&_svg]:w-3 [&_svg]:h-3">${SVG.likeSvg}${likes.length}</span>` : ''}
            </div>
            <div class="flex items-center gap-3 px-2 mt-1 text-[11px] font-bold text-zinc-500">
              <button onclick="toggleCommentLike('${post.id}', '${c.id}')" class="hover:underline ${liked ? 'text-blue-600' : ''}">Like</button>
              <button onclick="startReply('${post.id}', '${c.id}')" class="hover:underline">Reply</button>
              <span class="font-medium text-zinc-400">${c.time || ''}</span>
              ${mine ? `<button onclick="deleteComment('${post.id}', '${c.id}')" class="hover:underline text-rose-500 ml-auto">Delete</button>` : ''}
            </div>
            ${replies.length ? (open ? `
              <div class="mt-2 space-y-3">${replies.map(r => renderCommentItem(post, r, true)).join('')}</div>
              <button onclick="toggleReplies('${c.id}')" class="mt-2 px-2 text-[11px] font-bold text-zinc-500 hover:underline">Hide replies</button>
            ` : `
              <button onclick="toggleReplies('${c.id}')" class="mt-1.5 px-2 text-[11px] font-bold text-zinc-600 hover:underline flex items-center gap-1.5"><span class="w-4 border-t border-zinc-300"></span>View ${replies.length} ${replies.length > 1 ? 'replies' : 'reply'}</button>
            `) : ''}
          </div>
        </div>`;
    }

    function renderOpinionBoxModal() {
      const post = posts.find(p => p.id === opinionBoxPostId);
      if (!post) return '';
      const all = post.comments || [];
      const top = all.filter(c => !c.parentId);
      const rep = opinionReplyTo && opinionReplyTo.postId === post.id ? opinionReplyTo : null;
      return `
        <div class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center p-0 sm:p-4 z-50" onclick="if(event.target===this) closeOpinionBox()">
          <div class="bg-white rounded-t-2xl sm:rounded-2xl max-w-lg w-full flex flex-col max-h-[88vh] border border-zinc-300 shadow-xl">
            <div class="flex justify-between items-center px-5 py-3 border-b border-zinc-200 shrink-0">
              <h3 class="font-extrabold text-xs uppercase tracking-wider text-darkText">Opinion Box${all.length ? ' &bull; ' + all.length : ''}</h3>
              <button onclick="closeOpinionBox()" class="text-xs font-bold text-zinc-500">${SVG.close}</button>
            </div>
            <div id="opinionList" class="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-5 py-4 space-y-4">
              ${top.length ? top.map(c => renderCommentItem(post, c, false)).join('') : '<p class="text-xs text-zinc-400 text-center py-8">No opinions yet. Be the first to share one!</p>'}
            </div>
            <div class="px-4 pt-2 pb-3 border-t border-zinc-200 shrink-0 bg-white rounded-b-2xl">
              ${rep ? `<div class="flex items-center justify-between text-[11px] font-bold text-zinc-500 mb-2 px-1"><span>Replying to <span class="text-darkText">${rep.name}</span></span><button onclick="cancelReply()" class="text-rose-500 hover:underline">Cancel</button></div>` : ''}
              <div class="flex items-center gap-2">
                ${avatarHtml(currentUser, 'w-8 h-8 text-xs')}
                <input type="text" id="commentInput-${post.id}" onkeydown="if(event.key==='Enter'){addComment('${post.id}')}" placeholder="${rep ? 'Write a reply...' : 'Write an opinion...'}" class="flex-1 px-4 py-2.5 bg-zinc-100 rounded-full text-xs outline-none border border-transparent focus:border-zinc-300">
                <button onclick="addComment('${post.id}')" class="w-9 h-9 rounded-full bg-darkText text-white flex items-center justify-center shrink-0" title="Send">
                  <svg class="w-4 h-4 rotate-90" style="color:#A77BEA" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function addComment(postId) {
      const input = document.getElementById(`commentInput-${postId}`);
      if (!input || !input.value.trim()) return;

      const post = posts.find(p => p.id === postId);
      if (!post) return;

      playSfx("reply");
      const rep = opinionReplyTo && opinionReplyTo.postId === postId ? opinionReplyTo : null;
      const id = "c_" + Date.now();
      post.comments.push({
        id,
        userId: currentUser.id,
        text: input.value.trim(),
        time: "Just now",
        parentId: rep ? rep.parentId : null,
        likes: []
      });
      if (rep) opinionExpanded[rep.parentId] = true;
      opinionReplyTo = null;

      renderApp();
      const target = document.getElementById("cm-" + id);
      if (target) target.scrollIntoView({ block: "nearest" });
      const el = document.getElementById(`commentInput-${postId}`);
      if (el && lastPointerType !== "touch") el.focus();
    }

    function repostPost(postId) {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      if (!post.reposts) post.reposts = [];
      const idx = post.reposts.findIndex(r => r.userId === currentUser.id);

      if (idx !== -1) {
        playSfx("react_off");
        post.reposts.splice(idx, 1);
        post.repostsCount = Math.max(0, (post.repostsCount || 1) - 1);
      } else {
        playSfx("repost");
        post.reposts.push({ userId: currentUser.id });
        post.repostsCount = (post.repostsCount || 0) + 1;
      }

      renderApp();
    }

    function deletePost(postId) {
      posts = posts.filter(p => p.id !== postId);
      renderApp();
    }

    function donateBlood(postId) {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      if (!post.donors) post.donors = [];
      const idx = post.donors.indexOf(currentUser.id);

      if (idx !== -1) post.donors.splice(idx, 1);
      else post.donors.push(currentUser.id);

      renderApp();
    }

    function votePoll(postId, optIdx) {
      const post = posts.find(p => p.id === postId);
      if (!post || !post.pollOptions[optIdx]) return;
      playSfx("liquid");

      post.pollOptions.forEach((opt, idx) => {
        const uIdx = opt.votes.indexOf(currentUser.id);
        if (uIdx !== -1) opt.votes.splice(uIdx, 1);
        if (idx === optIdx) opt.votes.push(currentUser.id);
      });

      renderApp();
    }

    function toggleSoldState(postId) {
      const post = posts.find(p => p.id === postId);
      if (!post) return;
      post.isSold = !post.isSold;
      renderApp();
    }

    function sendConnectRequest(targetUserId) {
      if (pendingConnectRequests.some(r => r.fromUserId === targetUserId && r.toUserId === currentUser.id)) { acceptConnect(targetUserId); return; }
      if (pendingConnectRequests.some(r => r.fromUserId === currentUser.id && r.toUserId === targetUserId)) return;
      pendingConnectRequests.push({ fromUserId: currentUser.id, toUserId: targetUserId });
      renderApp();
      showToast("Connect request sent");
    }

    function acceptConnect(fromUserId) {
      const other = getUserById(fromUserId);
      if (!other) return;
      if (!currentUser.connectedUserIds) currentUser.connectedUserIds = [];
      if (!other.connectedUserIds) other.connectedUserIds = [];
      if (!currentUser.connectedUserIds.includes(other.id)) currentUser.connectedUserIds.push(other.id);
      if (!other.connectedUserIds.includes(currentUser.id)) other.connectedUserIds.push(currentUser.id);
      pendingConnectRequests = pendingConnectRequests.filter(r => !((r.fromUserId === fromUserId && r.toUserId === currentUser.id) || (r.fromUserId === currentUser.id && r.toUserId === fromUserId)));
      renderApp();
      showToast("You are now connected with " + other.name);
    }

    function declineConnect(fromUserId) {
      pendingConnectRequests = pendingConnectRequests.filter(r => !(r.fromUserId === fromUserId && r.toUserId === currentUser.id));
      renderApp();
    }

    function cancelConnect(toUserId) {
      pendingConnectRequests = pendingConnectRequests.filter(r => !(r.fromUserId === currentUser.id && r.toUserId === toUserId));
      renderApp();
    }

    // Open a direct message with any user (connected or not), e.g. from a sell or blood post
    function messageUser(targetUserId) {
      if (voiceRec) finishVoice(false);
      chatPendingImage = null;
      opinionBoxPostId = null;
      selectedChatUser = targetUserId;
      activeTab = "dms";
      renderApp();
    }

    function openPrivateChat(targetUserId) { messageUser(targetUserId); }

    function sendGlobalChatMessage() {
      const input = document.getElementById("chatInput");
      const text = input ? input.value.trim() : "";

      if (!text && !chatPendingImage) return;
      playSfx("send");

      globalChatMessages.push({
        id: "g_" + Date.now(),
        userId: currentUser.id,
        text: text,
        audio: null,
        image: chatPendingImage,
        time: "Just now"
      });

      if (input) input.value = "";
      chatPendingImage = null;
      renderApp();
    }

    function sendPrivateChatMessage(chatKey) {
      const input = document.getElementById("privChatInput");
      const text = input ? input.value.trim() : "";

      if (!text && !chatPendingImage) return;
      playSfx("send");

      if (!privateMessages[chatKey]) privateMessages[chatKey] = [];

      privateMessages[chatKey].push({
        senderId: currentUser.id,
        ts: Date.now(),
        text: text,
        image: chatPendingImage,
        time: "Just now"
      });

      if (input) input.value = "";
      chatPendingImage = null;
      renderApp();
    }


    // --- UI HELPERS (toast, image, voice) ---
    let postPendingImage = null;
    let marketPendingImage = null;
    let voiceRec = null;

    function showToast(msg) {
      const old = document.getElementById("toastMsg");
      if (old) old.remove();
      const el = document.createElement("div");
      el.id = "toastMsg";
      el.className = "fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-darkText text-white text-xs font-bold shadow-xl max-w-[90vw] text-center";
      el.innerText = msg;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2600);
    }

    function fmtDur(s) {
      s = Math.max(0, Math.round(s || 0));
      return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    }

    // Re-render but keep typed text, open forms and focus (so attach/voice never wipes what you typed)
    function rerenderKeepInputs() {
      const vals = {};
      document.querySelectorAll("#app input[id], #app textarea[id]").forEach(el => {
        if (el.type !== "file" && el.type !== "checkbox") vals[el.id] = el.value;
      });
      const forms = {};
      document.querySelectorAll('#app [id$="Form"]').forEach(el => { forms[el.id] = el.classList.contains("hidden"); });
      const act = document.activeElement && document.activeElement.id;
      renderApp();
      Object.keys(vals).forEach(id => { const el = document.getElementById(id); if (el && !el.value) el.value = vals[id]; });
      Object.keys(forms).forEach(id => { const el = document.getElementById(id); if (el) el.classList.toggle("hidden", forms[id]); });
      if (act) { const el = document.getElementById(act); if (el && el.focus) el.focus(); }
    }

    // Read + shrink an image so it stays light (max 1000px JPEG)
    function compressImage(file, cb) {
      if (!file) return;
      if (!/^image\//.test(file.type)) { showToast("Please select an image file"); return; }
      if (file.size > 15 * 1024 * 1024) { showToast("Image is too large (max 15MB)"); return; }
      const reader = new FileReader();
      reader.onerror = () => showToast("Couldn't read the image, please try again");
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          const k = Math.min(1, 1000 / Math.max(img.width, img.height));
          const w = Math.max(1, Math.round(img.width * k)), h = Math.max(1, Math.round(img.height * k));
          const c = document.createElement("canvas");
          c.width = w; c.height = h;
          const ctx = c.getContext("2d");
          ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          try { cb(c.toDataURL("image/jpeg", 0.78)); } catch (_) { cb(e.target.result); }
        };
        img.onerror = () => showToast("This image can't be opened");
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function renderImgPreview(kind) {
      const src = kind === "market" ? marketPendingImage : postPendingImage;
      if (!src) return "";
      return `<div class="relative inline-block"><img src="${src}" class="h-24 max-w-full rounded-xl border border-zinc-200 object-cover" alt="Selected photo"><button onclick="clearPendingImage('${kind}')" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-darkText text-white text-xs font-bold shadow" title="Remove photo">&times;</button></div>`;
    }

    function handlePostImageSelect(ev, kind) {
      const file = ev.target.files && ev.target.files[0];
      ev.target.value = "";
      if (!file) return;
      compressImage(file, data => {
        if (kind === "market") marketPendingImage = data; else postPendingImage = data;
        const el = document.getElementById("imgPrev-" + kind);
        if (el) el.innerHTML = renderImgPreview(kind);
      });
    }

    function clearPendingImage(kind) {
      if (kind === "market") marketPendingImage = null; else postPendingImage = null;
      const el = document.getElementById("imgPrev-" + kind);
      if (el) el.innerHTML = "";
    }

    function photoButton(kind) {
      return `
        <label class="px-2.5 py-2 hover:bg-zinc-100 rounded-lg transition cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600" title="Attach Photo">
          ${SVG.image}<span>Photo</span>
          <input type="file" accept="image/*" class="hidden" onchange="handlePostImageSelect(event, '${kind}')">
        </label>`;
    }

    // --- Voice notes (real recording) ---
    function pickAudioMime() {
      if (!window.MediaRecorder) return "";
      const list = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"];
      return list.find(t => MediaRecorder.isTypeSupported(t)) || "";
    }

    async function startVoice(target) {
      if (voiceRec) return;
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
        showToast("Voice recording isn't supported here (open the app over HTTPS or localhost)");
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mime = pickAudioMime();
        const rec = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
        const st = { rec, stream, chunks: [], target, start: Date.now(), timer: null, send: false };
        voiceRec = st;
        rec.ondataavailable = e => { if (e.data && e.data.size) st.chunks.push(e.data); };
        rec.onstop = () => {
          clearInterval(st.timer);
          st.stream.getTracks().forEach(t => t.stop());
          const dur = Math.max(1, Math.round((Date.now() - st.start) / 1000));
          if (voiceRec === st) voiceRec = null;
          if (!st.send || !st.chunks.length) { rerenderKeepInputs(); return; }
          const blob = new Blob(st.chunks, { type: rec.mimeType || mime || "audio/webm" });
          const fr = new FileReader();
          fr.onload = () => deliverVoice(st.target, fr.result, dur);
          fr.readAsDataURL(blob);
        };
        rec.start();
        st.timer = setInterval(() => {
          const s = Math.round((Date.now() - st.start) / 1000);
          const el = document.getElementById("voiceTimer");
          if (el) el.textContent = fmtDur(s);
          if (s >= 60) finishVoice(true);
        }, 500);
        rerenderKeepInputs();
      } catch (err) {
        voiceRec = null;
        showToast(err && err.name === "NotAllowedError" ? "Please allow microphone access" : "Couldn't start the microphone");
      }
    }

    function finishVoice(send) {
      if (!voiceRec) return;
      voiceRec.send = send;
      if (voiceRec.rec.state !== "inactive") voiceRec.rec.stop();
    }

    function deliverVoice(target, dataUrl, dur) {
      if (target === "global") {
        playSfx("send"); globalChatMessages.push({ id: "g_" + Date.now(), userId: currentUser.id, text: "", audio: dataUrl, audioDur: dur, image: null, time: "Just now" });
      } else if (target === "gossip") {
        const g = gossipActive(); if (g) { playSfx("send"); g.messages.push({ id: "gm_" + Date.now(), userId: currentUser.id, text: "", audio: dataUrl, audioDur: dur, image: null, time: "Just now" }); g.updated = Date.now(); saveState(); }
      } else {
        if (!privateMessages[target]) privateMessages[target] = [];
        playSfx("send"); privateMessages[target].push({ senderId: currentUser.id, ts: Date.now(), text: "", audio: dataUrl, audioDur: dur, image: null, time: "Just now" });
      }
      rerenderKeepInputs();
    }

    function voiceMicButton(target) {
      return `<button onclick="startVoice('${target}')" class="p-2.5 bg-zinc-100 hover:bg-zinc-200 rounded-xl" title="Record voice note">${SVG.mic}</button>`;
    }

    function voiceRecordingBar() {
      return `
        <button onclick="finishVoice(false)" class="p-2.5 bg-zinc-100 hover:bg-rose-100 text-accentRed rounded-xl font-black text-sm leading-none" title="Cancel">&times;</button>
        <div class="flex-1 flex items-center gap-2 px-3 py-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-700">
          <span class="w-2.5 h-2.5 rounded-full bg-accentRed animate-pulse"></span><span>Recording</span><span id="voiceTimer">${fmtDur((Date.now() - voiceRec.start) / 1000)}</span>
        </div>
        <button onclick="finishVoice(true)" class="px-4 py-2.5 bg-darkText text-white font-bold text-xs rounded-xl">Send</button>`;
    }

    function renderAudioMsg(msg) {
      if (!msg.audio) return "";
      if (typeof msg.audio !== "string") return `<div class="mt-1.5 text-[10px] font-bold opacity-70">Voice note (not available)</div>`;
      return `<div class="mt-1.5"><audio controls preload="metadata" src="${msg.audio}" class="w-52 max-w-full h-9"></audio><span class="block text-[10px] opacity-70 mt-0.5">Voice note &bull; ${fmtDur(msg.audioDur)}</span></div>`;
    }

    function handleChatImageSelect(ev) {
      const file = ev.target.files && ev.target.files[0];
      ev.target.value = "";
      if (!file) return;
      compressImage(file, data => {
        chatPendingImage = data;
        rerenderKeepInputs();
      });
    }

    function toggleBloodForm() {
      const el = document.getElementById("bloodForm");
      if (el) el.classList.toggle("hidden");
    }

    function toggleMarketForm() {
      const el = document.getElementById("marketForm");
      if (el) el.classList.toggle("hidden");
    }

    function togglePollForm() {
      pollFormOpen = !pollFormOpen;
      const el = document.getElementById("pollForm");
      if (el) el.classList.toggle("hidden", !pollFormOpen);
    }

    function filterBloodGroup(group) {
      bloodFilterGroup = group;
      renderApp();
    }

    function openEditProfile() {
      profPendingAvatar = undefined;
      profileEditing = true;
      renderApp();
    }

    function saveProfileChanges() {
      const name = document.getElementById("profName").value.trim();
      const user = document.getElementById("profUser").value.trim();
      const dept = document.getElementById("profDept").value;
      const blood = document.getElementById("profBlood").value;
      const isDonor = document.getElementById("profDonor").checked;
      const bio = document.getElementById("profBio").value.trim();
      const err = document.getElementById("profErr");

      if (!name || !user) {
        if (err) err.innerText = "Name and Username are required.";
        return;
      }

      currentUser.name = name;
      currentUser.username = user;
      currentUser.dept = dept;
      currentUser.bloodGroup = blood;
      currentUser.isDonor = isDonor;
      currentUser.bio = bio;
      if (profPendingAvatar !== undefined) {
        if (profPendingAvatar) currentUser.avatar = profPendingAvatar; else delete currentUser.avatar;
        profPendingAvatar = undefined;
      }

      profileEditing = false;
      renderApp();
    }

    function setAuthMode(mode) {
      authMode = mode;
      renderApp();
    }

    function submitAuth(ev) {
      ev.preventDefault();
      const form = ev.target;
      const errEl = document.getElementById("authErr");
      if (errEl) errEl.innerText = "";

      if (authMode === "login") {
        const loginVal = form.login.value.trim().toLowerCase();
        const pass = form.password.value;

        const user = registeredUsers.find(u => 
          (u.username.toLowerCase() === loginVal || u.email.toLowerCase() === loginVal) && u.password === pass
        );

        if (!user) {
          if (errEl) errEl.innerText = "Invalid username/email or password.";
          return false;
        }

        currentUser = user;
      } else {
        const name = form.name.value.trim();
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const dept = form.dept.value;
        const bloodGroup = form.blood.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const isDonor = form.donor.checked;

        if (!name || !username || !email || !password) {
          if (errEl) errEl.innerText = "Please fill in all required fields.";
          return false;
        }

        if (password !== confirm) {
          if (errEl) errEl.innerText = "Passwords do not match.";
          return false;
        }

        if (registeredUsers.some(u => u.username.toLowerCase() === username.toLowerCase())) {
          if (errEl) errEl.innerText = "Username already taken.";
          return false;
        }

        const newUser = {
          id: "u_" + Date.now(),
          name,
          username,
          email,
          dept,
          bloodGroup,
          password,
          isDonor,
          bio: "Student @ Daffodil International University.",
          connectedUserIds: []
        };

        registeredUsers.push(newUser);
        currentUser = newUser;
      }

      renderApp();
      return false;
    }

    function logout() {
      currentUser = null; authMode = "home";
      viewProfileId = null;
      if (activeTab === "userprofile") activeTab = "feed";
      renderApp();
    }

    // --- SECTION: ROUTINE CALENDAR PLANNER ---
    const RT_WEEK_START = 0; // 0 = Sunday first, 6 = Saturday first
    const RT_DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const RT_MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const RT_TYPES = {
      class: { label: "Class", bg: "#E4D2FD", dot: "#8B5CF6" },
      work:  { label: "Work",  bg: "#FFD9C9", dot: "#F26B3A" },
      exam:  { label: "Exam",  bg: "#FFC9C9", dot: "#E03E3E" },
      study: { label: "Study", bg: "#CDFF71", dot: "#7AA800" },
      other: { label: "Other", bg: "#C9E6FF", dot: "#2D8CDB" }
    };
    const rtNow = new Date();
    const rt = {
      y: rtNow.getFullYear(), m: rtNow.getMonth(),
      selected: [], events: {}, title: "My Routine", view: "plan", loadedFor: null,
      form: { type: "class", title: "", start: "09:00", end: "10:00", note: "" }
    };

    function rtEsc(s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }
    function rtKey(y, m, d) { return y + "-" + String(m + 1).padStart(2, "0") + "-" + String(d).padStart(2, "0"); }
    function rtParse(k) { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); }
    function rtFmtTime(t) {
      if (!t) return "";
      let [h, mi] = t.split(":").map(Number);
      const ap = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      return h + ":" + String(mi).padStart(2, "0") + " " + ap;
    }
    function rtStoreKey() { return "diuRoutineV1_" + (currentUser ? currentUser.id : "guest"); }
    function rtLoad() {
      if (rt.loadedFor === (currentUser && currentUser.id)) return;
      rt.loadedFor = currentUser && currentUser.id;
      rt.events = {}; rt.title = "My Routine"; rt.selected = []; rt.view = "plan";
      try {
        const s = JSON.parse(localStorage.getItem(rtStoreKey()) || "null");
        if (s) { rt.events = s.events || {}; rt.title = s.title || "My Routine"; }
      } catch (_) {}
    }
    function rtSave() {
      try { localStorage.setItem(rtStoreKey(), JSON.stringify({ events: rt.events, title: rt.title })); } catch (_) {}
    }
    function rtTotalEntries() { return Object.values(rt.events).reduce((n, a) => n + a.length, 0); }
    function rtSortedDates() { return Object.keys(rt.events).filter(k => rt.events[k].length).sort(); }

    function rtMonthShift(delta) {
      rt.m += delta;
      if (rt.m < 0) { rt.m = 11; rt.y--; }
      if (rt.m > 11) { rt.m = 0; rt.y++; }
      renderApp();
    }
    function rtToggleDate(k) {
      const i = rt.selected.indexOf(k);
      if (i >= 0) rt.selected.splice(i, 1); else rt.selected.push(k);
      renderApp();
    }
    function rtSelectWeekday(wd) {
      const days = new Date(rt.y, rt.m + 1, 0).getDate();
      const keys = [];
      for (let d = 1; d <= days; d++) if (new Date(rt.y, rt.m, d).getDay() === wd) keys.push(rtKey(rt.y, rt.m, d));
      const all = keys.every(k => rt.selected.includes(k));
      if (all) rt.selected = rt.selected.filter(k => !keys.includes(k));
      else keys.forEach(k => { if (!rt.selected.includes(k)) rt.selected.push(k); });
      renderApp();
    }
    function rtClearSelection() { rt.selected = []; renderApp(); }
    function rtSetType(t) { rt.form.type = t; renderApp(); }
    function rtSetField(f, v) { rt.form[f] = v; } // no re-render, keeps typing smooth
    function rtSetTitle(v) { rt.title = v; rtSave(); }

    function rtAddEntry() {
      const f = rt.form;
      if (!rt.selected.length) { showToast("Pick at least one date first"); return; }
      if (!f.title.trim()) { showToast("Write a title (e.g. CSE 311 Lecture)"); return; }
      if (!f.start || !f.end) { showToast("Set start and end time"); return; }
      if (f.end <= f.start) { showToast("End time must be after start time"); return; }
      rt.selected.forEach(k => {
        if (!rt.events[k]) rt.events[k] = [];
        rt.events[k].push({ id: "r" + Date.now() + Math.random().toString(36).slice(2, 6), type: f.type, title: f.title.trim(), start: f.start, end: f.end, note: f.note.trim() });
      });
      const n = rt.selected.length;
      f.title = ""; f.note = "";
      rtSave();
      renderApp();
      showToast("Added to " + n + " date" + (n > 1 ? "s" : ""));
    }
    function rtDeleteEntry(k, id) {
      rt.events[k] = (rt.events[k] || []).filter(e => e.id !== id);
      if (!rt.events[k].length) delete rt.events[k];
      rtSave(); renderApp();
    }
    function rtClearAll() {
      if (!confirm("Remove all routine entries?")) return;
      rt.events = {}; rt.selected = []; rtSave(); renderApp();
    }
    function rtGenerate() {
      if (!rtTotalEntries()) { showToast("Add at least one routine entry first"); return; }
      rt.view = "preview";
      renderApp();
      const main = document.querySelector("main"); if (main) main.scrollTop = 0;
    }
    function rtBack() { rt.view = "plan"; renderApp(); }

    async function rtDownload() {
      showToast("Preparing image...");
      try {
        if (!window.html2canvas) {
          await new Promise((res, rej) => {
            const s = document.createElement("script");
            s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
            s.onload = res; s.onerror = rej;
            document.head.appendChild(s);
          });
        }
        const el = document.getElementById("rtShot");
        const canvas = await html2canvas(el, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
        canvas.toBlob(b => {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.download = "my-routine-calendar.png";
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(a.href), 2000);
          showToast("Screenshot saved");
        }, "image/png");
      } catch (e) {
        showToast("Auto-save failed. Please take a normal screenshot instead.");
      }
    }

    function rtMonthCells(y, m) {
      const first = new Date(y, m, 1).getDay();
      const lead = (first - RT_WEEK_START + 7) % 7;
      const days = new Date(y, m + 1, 0).getDate();
      const cells = [];
      for (let i = 0; i < lead; i++) cells.push(null);
      for (let d = 1; d <= days; d++) cells.push(d);
      while (cells.length % 7) cells.push(null);
      return cells;
    }
    function rtWeekHeader(cls) {
      return Array.from({ length: 7 }, (_, i) => `<div class="${cls}">${RT_DAY_NAMES[(RT_WEEK_START + i) % 7]}</div>`).join("");
    }
    function rtDots(k) {
      const types = [...new Set((rt.events[k] || []).map(e => e.type))].slice(0, 4);
      return types.map(t => `<span class="w-1.5 h-1.5 rounded-full" style="background:${RT_TYPES[t].dot}"></span>`).join("");
    }

    function renderRoutineSection() {
      rtLoad();
      return rt.view === "preview" ? renderRoutinePreview() : renderRoutinePlanner();
    }

    function renderRoutinePlanner() {
      const todayKey = rtKey(rtNow.getFullYear(), rtNow.getMonth(), rtNow.getDate());
      const cells = rtMonthCells(rt.y, rt.m);
      const f = rt.form;
      const total = rtTotalEntries();
      const dates = rtSortedDates();

      const grid = cells.map(d => {
        if (!d) return `<div></div>`;
        const k = rtKey(rt.y, rt.m, d);
        const sel = rt.selected.includes(k);
        const isToday = k === todayKey;
        return `
          <button onclick="rtToggleDate('${k}')" class="aspect-square rounded-xl flex flex-col items-center justify-center gap-0.5 text-xs font-bold transition ${sel ? 'bg-darkText text-white' : 'bg-zinc-50 hover:bg-zinc-100 text-darkText'} ${isToday && !sel ? 'ring-2 ring-accentPeach' : ''}">
            <span>${d}</span>
            <span class="flex gap-0.5 h-1.5">${rtDots(k)}</span>
          </button>`;
      }).join("");

      const weekdayChips = Array.from({ length: 7 }, (_, i) => {
        const wd = (RT_WEEK_START + i) % 7;
        return `<button onclick="rtSelectWeekday(${wd})" class="px-2.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-[11px] font-bold">${RT_DAY_NAMES[wd]}</button>`;
      }).join("");

      const typeChips = Object.entries(RT_TYPES).map(([id, t]) => `
        <button onclick="rtSetType('${id}')" class="px-3 py-1.5 rounded-lg text-[11px] font-extrabold border-2 transition" style="background:${t.bg}; border-color:${f.type === id ? '#181716' : 'transparent'}">${t.label}</button>
      `).join("");

      const list = dates.length ? dates.map(k => {
        const dt = rtParse(k);
        const items = rt.events[k].slice().sort((a, b) => a.start.localeCompare(b.start));
        return `
          <div class="border border-zinc-200 rounded-xl p-3">
            <p class="text-xs font-extrabold mb-2">${RT_DAY_NAMES[dt.getDay()]}, ${dt.getDate()} ${RT_MONTH_NAMES[dt.getMonth()].slice(0, 3)} ${dt.getFullYear()}</p>
            <div class="space-y-1.5">
              ${items.map(e => `
                <div class="flex items-center gap-2 rounded-lg px-2.5 py-2" style="background:${RT_TYPES[e.type].bg}">
                  <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold truncate">${rtEsc(e.title)} <span class="text-[10px] font-semibold opacity-60">· ${RT_TYPES[e.type].label}</span></p>
                    <p class="text-[11px] font-semibold opacity-70">${rtFmtTime(e.start)} – ${rtFmtTime(e.end)}${e.note ? ' · ' + rtEsc(e.note) : ''}</p>
                  </div>
                  <button onclick="rtDeleteEntry('${k}','${e.id}')" aria-label="Delete" class="shrink-0 p-1.5 rounded-lg hover:bg-white/60">${SVG.delete}</button>
                </div>`).join("")}
            </div>
          </div>`;
      }).join("") : `<p class="text-xs text-zinc-500">Nothing added yet. Pick dates, fill the form, and tap "Add to selected dates".</p>`;

      return `
        <div class="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto w-full space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 px-1">
            <div>
              <h2 class="font-extrabold text-base"><span class="inline-flex align-middle mr-1.5">${SVG.calendar}</span>Routine Calendar</h2>
              <p class="text-xs text-zinc-500 mt-0.5">Class, work or exam routine: pick dates, add times, then generate your calendar.</p>
            </div>
            <button onclick="rtGenerate()" class="px-4 py-2.5 bg-darkText text-white text-xs font-bold rounded-xl ${total ? '' : 'opacity-40'}">Generate My Calendar${total ? ' (' + total + ')' : ''}</button>
          </div>

          <div class="grid gap-4 lg:grid-cols-2 lg:items-start">
            <div class="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <div class="flex items-center justify-between">
                <button onclick="rtMonthShift(-1)" aria-label="Previous month" class="w-9 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200 font-black">‹</button>
                <p class="font-extrabold text-sm">${RT_MONTH_NAMES[rt.m]} ${rt.y}</p>
                <button onclick="rtMonthShift(1)" aria-label="Next month" class="w-9 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200 font-black">›</button>
              </div>
              <div class="grid grid-cols-7 gap-1 text-center">${rtWeekHeader("text-[10px] font-extrabold uppercase text-zinc-400 pb-1")}${grid}</div>
              <div>
                <p class="text-[10px] font-extrabold uppercase tracking-wide text-zinc-400 mb-1.5">Quick select every…</p>
                <div class="flex flex-wrap gap-1.5">${weekdayChips}</div>
              </div>
              <div class="flex items-center justify-between pt-1">
                <p class="text-xs font-bold text-zinc-600">${rt.selected.length} date${rt.selected.length === 1 ? '' : 's'} selected</p>
                <button onclick="rtClearSelection()" class="text-[11px] font-bold text-zinc-500 underline">Clear selection</button>
              </div>
            </div>

            <div class="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
              <p class="font-extrabold text-sm">Add routine to selected dates</p>
              <div class="flex flex-wrap gap-1.5">${typeChips}</div>
              <input type="text" value="${rtEsc(f.title)}" oninput="rtSetField('title', this.value)" placeholder="Title (e.g. CSE 311 Lecture, Part-time shift)" class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
              <div class="grid grid-cols-2 gap-2">
                <label class="text-[11px] font-bold text-zinc-500">Start
                  <input type="time" value="${f.start}" onchange="rtSetField('start', this.value)" class="mt-1 w-full p-2.5 bg-zinc-50 rounded-xl text-xs border border-zinc-200 text-darkText">
                </label>
                <label class="text-[11px] font-bold text-zinc-500">End
                  <input type="time" value="${f.end}" onchange="rtSetField('end', this.value)" class="mt-1 w-full p-2.5 bg-zinc-50 rounded-xl text-xs border border-zinc-200 text-darkText">
                </label>
              </div>
              <input type="text" value="${rtEsc(f.note)}" oninput="rtSetField('note', this.value)" placeholder="Note / room (optional)" class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
              <button onclick="rtAddEntry()" class="w-full py-2.5 bg-accentLime border border-zinc-300 text-darkText text-xs font-extrabold rounded-xl hover:brightness-95">Add to selected dates</button>
            </div>
          </div>

          <div class="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
            <div class="flex items-center justify-between gap-2">
              <p class="font-extrabold text-sm">Added routines</p>
              ${total ? `<button onclick="rtClearAll()" class="text-[11px] font-bold text-accentRed underline">Clear all</button>` : ''}
            </div>
            <div class="grid gap-2 md:grid-cols-2 xl:grid-cols-3">${list}</div>
          </div>
        </div>
      `;
    }

    function renderRoutinePreview() {
      const dates = rtSortedDates();
      const months = [...new Set(dates.map(k => k.slice(0, 7)))];

      const monthBlocks = months.map(ym => {
        const [y, m] = ym.split("-").map(Number);
        const cells = rtMonthCells(y, m - 1).map(d => {
          if (!d) return `<div></div>`;
          const k = rtKey(y, m - 1, d);
          const ev = rt.events[k];
          if (!ev || !ev.length) return `<div class="aspect-square rounded-lg flex items-center justify-center text-[11px] font-semibold text-zinc-400">${d}</div>`;
          const first = ev.slice().sort((a, b) => a.start.localeCompare(b.start))[0];
          return `<div class="aspect-square rounded-lg flex flex-col items-center justify-center text-[11px] font-extrabold" style="background:${RT_TYPES[first.type].bg}"><span>${d}</span><span class="flex gap-0.5 h-1.5">${rtDots(k)}</span></div>`;
        }).join("");
        return `
          <div class="rounded-2xl border border-zinc-200 p-3">
            <p class="text-xs font-extrabold mb-2">${RT_MONTH_NAMES[m - 1]} ${y}</p>
            <div class="grid grid-cols-7 gap-1 text-center">${rtWeekHeader("text-[9px] font-extrabold uppercase text-zinc-400 pb-0.5")}${cells}</div>
          </div>`;
      }).join("");

      const agenda = dates.map(k => {
        const dt = rtParse(k);
        const items = rt.events[k].slice().sort((a, b) => a.start.localeCompare(b.start));
        return `
          <div class="flex gap-3">
            <div class="w-14 shrink-0 text-center rounded-xl bg-darkText text-white py-2 self-start">
              <p class="text-lg font-black leading-none">${dt.getDate()}</p>
              <p class="text-[10px] font-bold uppercase mt-1 opacity-80">${RT_DAY_NAMES[dt.getDay()]}</p>
              <p class="text-[9px] font-semibold uppercase opacity-60">${RT_MONTH_NAMES[dt.getMonth()].slice(0, 3)}</p>
            </div>
            <div class="flex-1 min-w-0 space-y-1.5">
              ${items.map(e => `
                <div class="rounded-xl px-3 py-2 border-l-4" style="background:${RT_TYPES[e.type].bg}; border-color:${RT_TYPES[e.type].dot}">
                  <p class="text-xs font-extrabold">${rtEsc(e.title)}</p>
                  <p class="text-[11px] font-semibold opacity-70">${rtFmtTime(e.start)} – ${rtFmtTime(e.end)} · ${RT_TYPES[e.type].label}${e.note ? ' · ' + rtEsc(e.note) : ''}</p>
                </div>`).join("")}
            </div>
          </div>`;
      }).join("");

      const used = [...new Set(dates.flatMap(k => rt.events[k].map(e => e.type)))];
      const legend = used.map(t => `<span class="inline-flex items-center gap-1 text-[10px] font-bold"><span class="w-2.5 h-2.5 rounded-full" style="background:${RT_TYPES[t].dot}"></span>${RT_TYPES[t].label}</span>`).join("");

      return `
        <div class="max-w-xl mx-auto w-full space-y-4">
          <div class="flex gap-2">
            <button onclick="rtBack()" class="px-3.5 py-2.5 bg-white border border-zinc-300 text-xs font-bold rounded-xl">← Edit</button>
            <button onclick="rtDownload()" class="flex-1 px-3.5 py-2.5 bg-darkText text-white text-xs font-bold rounded-xl">Save as image</button>
          </div>
          <input type="text" value="${rtEsc(rt.title)}" oninput="rtSetTitle(this.value)" onchange="renderApp()" placeholder="Calendar title" class="w-full p-2.5 bg-white rounded-xl text-xs font-bold outline-none border border-zinc-200">

          <div id="rtShot" class="bg-white rounded-3xl p-5 space-y-4 border border-zinc-200">
            <div>
              <p class="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Your Calendar</p>
              <h2 class="text-xl font-black leading-tight mt-0.5">${rtEsc(rt.title || "My Routine")}</h2>
              <p class="text-[11px] font-semibold text-zinc-500 mt-0.5">${rtEsc(currentUser.name)} · ${dates.length} day${dates.length === 1 ? '' : 's'} · ${rtTotalEntries()} entr${rtTotalEntries() === 1 ? 'y' : 'ies'}</p>
            </div>
            <div class="space-y-3">${monthBlocks}</div>
            <div class="flex flex-wrap gap-3">${legend}</div>
            <div class="space-y-2.5">${agenda}</div>
            <p class="text-[9px] font-bold uppercase tracking-widest text-zinc-300 text-center pt-1">DIU Connect Hub</p>
          </div>
        </div>
      `;
    }

        // --- SECTION: LOVEZONE (opt-in dating zone) ---
    const LZ_INTENTS = ["Serious relationship", "Marriage-minded", "Getting to know people", "Friendship first"];
    const LZ_INTERESTS = ["Music", "Songs", "Bands", "Movies", "K-Drama", "Web Series", "Anime", "Football", "Cricket", "Gaming", "Coding", "Travel", "Books", "Poetry", "Foodie", "Cooking", "Photography", "Art", "Fitness", "Gym", "Biking", "Hiking", "Fashion", "Podcasts", "Dancing", "Singing", "Guitar", "Volunteering"];
    const lzKey = (a, b) => [a, b].sort().join("|");
    const lzLiked = (a, b) => lz.interests.some(i => i.from === a && i.to === b);
    const lzAccepted = (a, b) => lz.proposals.find(p => p.status === "accepted" && ((p.from === a && p.to === b) || (p.from === b && p.to === a)));
    const lzMatched = (a, b) => (lzLiked(a, b) && lzLiked(b, a)) || !!lzAccepted(a, b);
    const lzPending = (a, b) => lz.proposals.find(p => p.status === "pending" && ((p.from === a && p.to === b) || (p.from === b && p.to === a)));
    const lzFits = (a, b) => { const A = lz.members[a], B = lz.members[b]; return (A.seeking === "Everyone" || A.seeking === B.gender) && (B.seeking === "Everyone" || B.seeking === A.gender); };
    function lzCompat(a, b) {
      const A = lz.members[a], B = lz.members[b];
      const shared = A.interests.filter(x => B.interests.includes(x)).length;
      return Math.min(99, 40 + shared * 12 + (A.intent === B.intent ? 15 : 0) + (getUserById(a).dept === getUserById(b).dept ? 5 : 0));
    }
    function lzBadgeCount() {
      if (!currentUser || !lz.members[currentUser.id]) return 0;
      const me = currentUser.id;
      return lz.interests.filter(i => i.to === me && lz.members[i.from] && !lzLiked(me, i.from)).length + lz.proposals.filter(p => p.to === me && p.status === "pending").length;
    }
    function lzSeed() {
      if (lz.seeded) return;
      lz.seeded = true;
      lz.members.u2 = { gender: "Female", seeking: "Male", age: 21, intent: "Serious relationship", interests: ["Coding", "Books", "Art", "Music"], bio: "Coffee, code and long campus walks. Looking for someone genuine." };
      lz.members.u3 = { gender: "Male", seeking: "Female", age: 23, intent: "Getting to know people", interests: ["Cricket", "Travel", "Foodie"], bio: "Event lead by day, foodie by night." };
      lz.interests.push({ from: "u2", to: "u1" });
    }

    function renderProfileCard() {
      const a = activeTab === "profile";
      return `<button onclick="switchTab('profile')" class="w-full flex items-center gap-3 p-2.5 rounded-2xl text-left transition ${a ? 'bg-black text-white shadow-sm' : 'bg-transparent hover:bg-zinc-100 text-darkText'}">
        ${avatarHtml(currentUser, 'w-10 h-10 text-sm ring-2 ring-white')}
        <div class="min-w-0"><p class="font-extrabold text-xs truncate">${escapeHtml(currentUser.name)}</p><p class="text-[10px] font-bold opacity-70">My Profile</p></div>
      </button>`;
    }

    function renderLoveNavItem() {
      const a = activeTab === "lovezone";
      return `<button onclick="switchTab('lovezone')" class="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl font-bold text-xs transition ${a ? 'bg-accentRed text-white shadow-sm' : 'bg-accentRed/10 text-accentRed hover:bg-accentRed/20'}">
        ${(a ? SVG.lovezone.replace(/style="color:[^"]*"/, 'style="color:#fff"') : SVG.lovezone).replace('w-4 h-4','w-5 h-5')}<span>LoveZone</span>${navBadge("lovezone", false)}
      </button>`;
    }

    function renderLoveZoneSection() {
      const me = currentUser.id;
      if (!lz.members[me] || lzEditing) return renderLzForm(!!lz.members[me]);
      if (lzChat) return renderLzChat();
      const m = lz.members[me];
      const mem = id => lz.members[id];
      const discover = Object.keys(lz.members).filter(id => id !== me && lzFits(me, id) && !(lz.passes[me] || []).includes(id)).sort((a, b) => lzCompat(me, b) - lzCompat(me, a));
      const inc = lz.interests.filter(i => i.to === me && mem(i.from) && !lzLiked(me, i.from)).map(i => i.from);
      const out = lz.interests.filter(i => i.from === me && mem(i.to) && !lzLiked(i.to, me)).map(i => i.to);
      const propIn = lz.proposals.filter(p => p.to === me && p.status === "pending" && mem(p.from));
      const propOut = lz.proposals.filter(p => p.from === me && mem(p.to));
      const matches = Object.keys(lz.members).filter(id => id !== me && lzMatched(me, id));
      const tabs = [["discover", "Discover", discover.length], ["interested", "Interested", inc.length], ["proposals", "Proposals", propIn.length], ["matches", "Matches", matches.length]];
      const empty = t => `<div class="bg-white rounded-2xl border border-zinc-200 p-8 text-center text-xs font-bold text-zinc-400">${t}</div>`;
      const sect = (t, body) => `<div class="space-y-2"><h3 class="text-[11px] font-extrabold uppercase tracking-widest text-zinc-500 px-1">${t}</h3>${body}</div>`;
      const grid = ids => `<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">${ids.map(id => lzCard(id, lzTab)).join('')}</div>`;
      const propRow = (p, incoming) => {
        const o = incoming ? p.from : p.to, u = getUserById(o);
        const st = p.status === "pending" ? "Waiting" : p.status === "accepted" ? "Accepted" : "Declined";
        return `<div class="bg-white rounded-2xl border border-zinc-200 p-4 space-y-2">
          <div class="flex items-center gap-3">${avatarHtml(u, 'w-10 h-10 text-sm', true)}
            <div class="min-w-0 flex-1"><p ${profileAttr(o)} class="font-bold text-xs truncate cursor-pointer hover:underline">${escapeHtml(u.name)}${deptBadge(u.dept)}</p><p class="text-[10px] text-zinc-500">${incoming ? 'Proposed to you' : 'You proposed'}</p></div>
            ${incoming && p.status === "pending" ? `<button onclick="lzRespond('${p.id}',true)" class="px-3 py-1.5 bg-darkText text-white text-xs font-bold rounded-lg">Accept</button><button onclick="lzRespond('${p.id}',false)" class="px-3 py-1.5 bg-zinc-100 text-xs font-bold rounded-lg">Decline</button>` : `<span class="text-[10px] font-bold px-2 py-1 rounded-md ${p.status === 'accepted' ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-200 text-zinc-500'}">${st}</span>`}
          </div>
          <p class="text-xs text-zinc-700 bg-zinc-50 rounded-xl p-3 break-words">${escapeHtml(p.msg)}</p></div>`;
      };
      let body = "";
      if (lzTab === "discover") body = discover.length ? grid(discover) : empty("No one new right now. Check back soon or widen your preferences.");
      else if (lzTab === "interested") body = (inc.length ? sect("Interested in you", grid(inc)) : "") + (out.length ? sect("You're interested in", grid(out)) : "") + (inc.length || out.length ? "" : empty("No pending interests yet. Tap Interested on a profile."));
      else if (lzTab === "proposals") body = (propIn.length ? sect("Received", propIn.map(p => propRow(p, true)).join('')) : "") + (propOut.length ? sect("Sent", propOut.map(p => propRow(p, false)).join('')) : "") + (propIn.length || propOut.length ? "" : empty("No proposals yet. Found someone special? Hit Propose."));
      else body = matches.length ? grid(matches) : empty("No matches yet. A match happens when you both show interest, or a proposal is accepted.");

      return `<div class="max-w-3xl lg:max-w-4xl mx-auto w-full space-y-4">
        <div class="flex items-center justify-between gap-3 px-1">
          <div class="min-w-0"><h2 class="font-extrabold text-base flex items-center gap-2">${SVG.lovezone.replace(/style="color:[^"]*"/, 'style="color:#EE585A"')}LoveZone</h2>
            <p class="text-xs text-zinc-500 mt-0.5 truncate">${escapeHtml(m.gender)}, ${m.age} &bull; ${escapeHtml(m.intent)} &bull; looking for: ${escapeHtml(m.seeking)}</p></div>
          <div class="flex gap-2 shrink-0"><button onclick="lzEditing=true;renderApp()" class="px-3 py-1.5 bg-zinc-900/5 hover:bg-zinc-900/10 rounded-lg text-xs font-bold">Edit</button><button onclick="lzLeave()" class="px-3 py-1.5 bg-zinc-900/10 hover:bg-zinc-900/15 rounded-lg text-xs font-bold">Leave</button></div>
        </div>
        <div class="grid grid-cols-4 gap-1.5 bg-white p-1.5 rounded-2xl border border-zinc-200">
          ${tabs.map(([id, l, n]) => `<button onclick="lzTab='${id}';renderApp()" class="py-2 rounded-xl text-xs font-bold transition ${lzTab === id ? 'bg-darkText text-white' : 'text-zinc-600 hover:bg-zinc-100'}">${l}${n ? ` <span class="${lzTab === id ? 'text-accentLime' : 'text-accentRed'}">${n}</span>` : ''}</button>`).join('')}
        </div>
        ${body}
        <p class="text-[10px] text-zinc-400 font-bold text-center">Be respectful. Never share money or passwords. Only members who joined LoveZone can see this page.</p>
      </div>
      ${lzProposeTo ? renderLzPropose() : ''}`;
    }

    function lzCard(id, mode) {
      const me = currentUser.id, u = getUserById(id), m = lz.members[id], mine = lz.members[me];
      const matched = lzMatched(me, id), liked = lzLiked(me, id), likesMe = lzLiked(id, me);
      const pend = lzPending(me, id);
      const btn = "px-3 py-2 text-xs font-bold rounded-xl transition ";
      let acts;
      if (matched) acts = `<span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1.5 rounded-md">Matched</span><button onclick="lzOpenChat('${id}')" class="${btn}bg-darkText text-white">Chat</button>`;
      else acts = `<button onclick="lzToggleInterest('${id}')" class="${btn}${liked ? 'bg-accentRed text-white' : 'bg-white border border-zinc-300 text-darkText hover:bg-zinc-100'}">${liked ? '&hearts; Interested' : (likesMe ? '&hearts; Like back' : '&#9825; Interested')}</button>`
        + (pend ? `<span class="text-[10px] font-bold text-zinc-500 bg-zinc-200 px-2 py-1.5 rounded-md">${pend.from === me ? 'Proposed' : 'Proposed you'}</span>` : `<button onclick="lzOpenPropose('${id}')" class="${btn}bg-darkText text-white">Propose</button>`)
        + (mode === "discover" ? `<button onclick="lzPass('${id}')" class="${btn}bg-zinc-100 text-zinc-600">Pass</button>` : "");
      return `<div class="bg-white rounded-2xl border border-zinc-200 shadow-sm p-4 space-y-3">
        <div class="flex items-center gap-3">${avatarHtml(u, 'w-12 h-12 text-base', true)}
          <div class="min-w-0 flex-1"><p ${profileAttr(id)} class="font-extrabold text-sm truncate cursor-pointer hover:underline">${escapeHtml(u.name)}, ${m.age}${deptBadge(u.dept)}</p>
            <p class="text-[11px] text-zinc-500 truncate">${escapeHtml(m.gender)} &bull; ${escapeHtml(m.intent)}</p></div>
          <span class="shrink-0 text-[11px] font-black px-2 py-1 rounded-lg bg-accentRed/10 text-accentRed">${lzCompat(me, id)}% match</span></div>
        ${likesMe && !matched ? '<p class="text-[11px] font-bold text-accentRed">&hearts; Interested in you</p>' : ''}
        ${m.bio ? `<p class="text-xs text-zinc-700 break-words">${escapeHtml(m.bio)}</p>` : ''}
        <div class="flex flex-wrap gap-1.5">${m.interests.map(x => `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${mine.interests.includes(x) ? 'bg-accentLime text-darkText' : 'bg-zinc-100 text-zinc-600'}">${x}</span>`).join('')}</div>
        <div class="flex flex-wrap items-center gap-2 pt-1">${acts}</div></div>`;
    }

    function renderLzForm(editing) {
      const m = lz.members[currentUser.id] || { gender: "Male", seeking: "Female", age: "", intent: LZ_INTENTS[0], interests: [], bio: "" };
      const sel = (id, opts, v) => `<select id="${id}" class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs border border-zinc-200 outline-none">${opts.map(o => `<option ${o === v ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
      const lab = t => `<label class="block text-[11px] font-bold text-zinc-600 mb-1">${t}</label>`;
      const consent = ["I'm 18 or older and I'm here to find a partner. LoveZone is a dating zone.", "I allow my LoveZone profile to be visible to other LoveZone members.", "I'll be respectful, honest, and I'll accept when someone says no."];
      return `<div class="max-w-xl mx-auto w-full space-y-4">
        <div class="px-1">
          <h2 class="font-extrabold text-base flex items-center gap-2">${SVG.lovezone.replace(/style="color:[^"]*"/, 'style="color:#EE585A"')}${editing ? 'Edit your LoveZone profile' : 'Join LoveZone'}</h2>
          <p class="text-xs text-zinc-500 mt-1">${editing ? 'Update what other members see.' : 'LoveZone is a private dating zone inside DIU Connect Hub. You are only added after you give your permission below.'}</p></div>
        <div class="bg-white rounded-2xl border border-zinc-200 p-5 space-y-4">
          ${editing ? '' : `<div class="space-y-2.5"><p class="text-xs font-extrabold">Your permission</p>${consent.map((t, i) => `<label class="flex items-start gap-2.5 text-xs text-zinc-700"><input type="checkbox" id="lzC${i + 1}" class="mt-0.5 accent-[#CF1830]"><span>${t}</span></label>`).join('')}</div>`}
          <div class="grid grid-cols-2 gap-3">
            <div>${lab('I am')}${sel('lzGender', ['Male', 'Female', 'Other'], m.gender)}</div>
            <div>${lab('Looking for')}${sel('lzSeek', ['Female', 'Male', 'Everyone'], m.seeking)}</div>
            <div>${lab('Age')}<input id="lzAge" type="number" min="18" max="60" value="${m.age}" class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs border border-zinc-200 outline-none"></div>
            <div>${lab('I want')}${sel('lzIntent', LZ_INTENTS, m.intent)}</div></div>
          <div>${lab('Interests')}<div class="flex flex-wrap gap-2">${LZ_INTERESTS.map(x => `<label class="cursor-pointer"><input type="checkbox" name="lzInt" value="${x}" ${m.interests.includes(x) ? 'checked' : ''} class="peer hidden"><span class="inline-block px-3 py-1.5 rounded-full text-[11px] font-bold bg-zinc-100 text-zinc-600 peer-checked:bg-accentRed peer-checked:text-white">${x}</span></label>`).join('')}</div></div>
          <div>${lab('About me')}<textarea id="lzBio" maxlength="200" rows="3" placeholder="Say something real, in under 200 characters" class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs border border-zinc-200 outline-none resize-none">${escapeHtml(m.bio)}</textarea></div>
          <div class="flex gap-2"><button onclick="lzSubmitProfile(${editing})" class="flex-1 py-2.5 bg-accentRed text-white text-xs font-extrabold rounded-xl">${editing ? 'Save changes' : 'Agree &amp; join LoveZone'}</button>
            ${editing ? `<button onclick="lzEditing=false;renderApp()" class="px-4 py-2.5 bg-zinc-100 text-xs font-bold rounded-xl">Cancel</button>` : ''}</div>
        </div></div>`;
    }

    function renderLzPropose() {
      const u = getUserById(lzProposeTo);
      return `<div class="fixed inset-0 z-40 bg-black/40 flex items-center justify-center p-4" onclick="if(event.target===this){lzProposeTo=null;renderApp()}">
        <div class="w-full max-w-sm bg-white rounded-2xl p-5 space-y-3 shadow-2xl">
          <h3 class="font-extrabold text-sm">Propose to ${escapeHtml(u.name)}</h3>
          <p class="text-[11px] text-zinc-500">Write a short, sincere message. If they accept, you match and can chat.</p>
          <textarea id="lzPropMsg" maxlength="250" rows="4" class="w-full p-2.5 bg-zinc-50 rounded-xl text-xs border border-zinc-200 outline-none resize-none" placeholder="Hi, I'd love to get to know you..."></textarea>
          <div class="flex gap-2"><button onclick="lzSendProposal()" class="flex-1 py-2.5 bg-accentRed text-white text-xs font-extrabold rounded-xl">Send proposal</button><button onclick="lzProposeTo=null;renderApp()" class="px-4 py-2.5 bg-zinc-100 text-xs font-bold rounded-xl">Cancel</button></div>
        </div></div>`;
    }

    function renderLzChat() {
      const me = currentUser.id, u = getUserById(lzChat), msgs = lz.msgs[lzKey(me, lzChat)] || [];
      return `<div class="max-w-2xl mx-auto w-full bg-white rounded-2xl border border-zinc-200 shadow-sm p-4 flex flex-col h-[calc(100dvh-9.5rem)] sm:h-[calc(100dvh-10rem)] lg:h-[calc(100dvh-12rem)] min-h-[340px]">
        <div class="pb-2 border-b border-zinc-200 flex items-center justify-between gap-2 shrink-0">
          <div class="flex items-center gap-2 min-w-0">${avatarHtml(u, 'w-8 h-8 text-xs', true)}<h4 class="font-bold text-xs truncate">${escapeHtml(u.name)} <span class="text-accentRed">&hearts; ${lzCompat(me, lzChat)}%</span></h4></div>
          <button onclick="lzChat=null;renderApp()" class="text-xs font-bold text-accentRed">&larr; Matches</button></div>
        <div data-chatscroll class="flex-1 min-h-0 overflow-y-auto custom-scrollbar space-y-2 py-3">
          ${msgs.length ? msgs.map(g => `<div class="flex flex-col ${g.from === me ? 'items-end' : 'items-start'}"><div class="p-2.5 rounded-xl max-w-[85%] break-words text-xs ${g.from === me ? 'bg-accentRed text-white' : 'bg-zinc-100'}">${escapeHtml(g.text)}</div><span class="text-[9px] text-zinc-400 mt-0.5">${g.time}</span></div>`).join('') : '<p class="text-center text-xs font-bold text-zinc-400 pt-8">You matched! Say hello.</p>'}
        </div>
        <div class="flex items-center gap-2 pt-2 border-t border-zinc-200 shrink-0">
          <input id="lzInput" type="text" onkeydown="if(event.key==='Enter')lzSend()" placeholder="Write a message..." class="flex-1 p-2 bg-zinc-50 rounded-xl text-xs outline-none border border-zinc-200">
          <button onclick="lzSend()" class="px-3 py-2 bg-accentRed text-white text-xs font-bold rounded-xl">Send</button></div></div>`;
    }

    function lzSubmitProfile(editing) {
      const v = id => document.getElementById(id);
      if (!editing && !["lzC1", "lzC2", "lzC3"].every(i => v(i).checked)) return showToast("Please accept all three permissions to join LoveZone");
      const age = parseInt(v("lzAge").value, 10);
      if (!(age >= 18 && age <= 60)) return showToast("LoveZone is for members aged 18 and above");
      lz.members[currentUser.id] = {
        gender: v("lzGender").value, seeking: v("lzSeek").value, age, intent: v("lzIntent").value,
        interests: [...document.querySelectorAll("input[name=lzInt]:checked")].map(x => x.value),
        bio: v("lzBio").value.trim().slice(0, 200)
      };
      lzEditing = false; lzTab = "discover";
      showToast(editing ? "Profile updated" : "Welcome to LoveZone");
      renderApp();
    }
    function lzLeave() {
      if (!confirm("Leave LoveZone? Your dating profile, interests, proposals and chats will be removed.")) return;
      const me = currentUser.id;
      delete lz.members[me];
      lz.interests = lz.interests.filter(i => i.from !== me && i.to !== me);
      lz.proposals = lz.proposals.filter(p => p.from !== me && p.to !== me);
      Object.keys(lz.msgs).forEach(k => { if (k.split("|").includes(me)) delete lz.msgs[k]; });
      lzChat = null; lzEditing = false; renderApp();
    }
    function lzToggleInterest(id) {
      const me = currentUser.id;
      if (lzLiked(me, id)) lz.interests = lz.interests.filter(i => !(i.from === me && i.to === id));
      else { lz.interests.push({ from: me, to: id }); showToast(lzLiked(id, me) ? "It's a match with " + getUserById(id).name + "!" : "Interest sent"); }
      renderApp();
    }
    function lzPass(id) { const me = currentUser.id; (lz.passes[me] = lz.passes[me] || []).push(id); renderApp(); }
    function lzOpenPropose(id) { lzProposeTo = id; renderApp(); }
    function lzSendProposal() {
      const me = currentUser.id, to = lzProposeTo, msg = document.getElementById("lzPropMsg").value.trim();
      if (!msg) return showToast("Write a short message with your proposal");
      if (lzPending(me, to) || lzAccepted(me, to)) { lzProposeTo = null; return renderApp(); }
      playSfx("send");
      lz.proposals.push({ id: "lp" + Date.now(), from: me, to, msg: msg.slice(0, 250), status: "pending" });
      lzProposeTo = null; showToast("Proposal sent"); renderApp();
    }
    function lzRespond(pid, ok) {
      const p = lz.proposals.find(x => x.id === pid);
      if (!p) return;
      p.status = ok ? "accepted" : "declined";
      if (ok) showToast("Accepted! You're matched, start chatting.");
      renderApp();
    }
    function lzOpenChat(id) { lzChat = id; renderApp(); }
    function lzSend() {
      const inp = document.getElementById("lzInput"), t = inp ? inp.value.trim() : "";
      if (!t || !lzChat) return;
      playSfx("send");
      const k = lzKey(currentUser.id, lzChat);
      (lz.msgs[k] = lz.msgs[k] || []).push({ from: currentUser.id, text: t.slice(0, 500), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) });
      renderApp();
      setTimeout(() => { const i = document.getElementById("lzInput"); if (i) i.focus(); }, 0);
    }

    // --- CLICK GLITCH: only the icon(s) inside the clicked control glitch (survives re-render) ---
    (function () {
      const CTRL = 'button, a, label, [onclick]';
      const norm = el => (el.textContent || '').replace(/\s+/g, ' ').trim();
      const glitch = ctrl => ctrl.querySelectorAll('svg').forEach(i => { i.classList.remove('glitch-fx'); void i.getBoundingClientRect(); i.classList.add('glitch-fx'); setTimeout(() => i.classList.remove('glitch-fx'), 520); });
      document.addEventListener('click', ev => {
        const t = ev.target.closest && ev.target.closest(CTRL);
        if (!t || !t.querySelector('svg')) return;
        const txt = norm(t), r = t.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
        if (document.body.contains(t)) glitch(t);
        setTimeout(() => {   // the app re-renders on click, so re-apply to the new element in the same spot
          const e = document.elementFromPoint(x, y), b = e && e.closest && e.closest(CTRL);
          if (b && b !== t && norm(b) === txt) glitch(b);
        }, 30);
      }, true);
    })();

    // keep layout height equal to the visible screen height (address-bar safe)
    function setAppHeight() { document.documentElement.style.setProperty('--app-h', window.innerHeight + 'px'); }
    setAppHeight();
    window.addEventListener('resize', setAppHeight);
    window.addEventListener('orientationchange', setAppHeight);

    // --- INITIALIZE APP ---
    window.onload = function() {
      lzSeed();
      if (currentUser) { document.getElementById("app").innerHTML = skeletonHtml(); setTimeout(renderApp, 450); }
      else renderApp();
    };
