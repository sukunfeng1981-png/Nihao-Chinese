// 使用版本号防止缓存
const VERSION = new Date().getTime(); 

const ROLES = {
    bb: { name: "北北", avatar: "images/beibei.jpg" },
    nn: { name: "南南", avatar: "images/nannan.jpg" },
    mingming: { name: "明明", avatar: "images/mingming.jpg" },
    mama: { name: "妈妈", avatar: "images/mama.jpg" }
};

const rawData = [
    { id: "1", side: 'left', ...ROLES.bb, zh: "你叫什么名字？", th: "คุณชื่ออะไร" },
        { id: "2", side: 'right', ...ROLES.nn, zh: "我叫南南，", th: "ฉันชื่อหนานหนาน" },
        { id: "2-2", side: 'right', ...ROLES.nn, zh: "你呢？", th: "แล้วคุณล่ะ" },
        { id: "3", side: 'left', ...ROLES.bb, zh: "我叫北北。", th: "ฉันชื่อเป้ยเป้ย" },
        { id: "4", side: 'right', ...ROLES.nn, zh: "你好，北北。", th: "สวัสดี เป้ยเป้ย" },
        { id: "5", side: 'left', ...ROLES.bb, zh: "你是韩国人吗？", th: "คุณเป็นคนเกาหลีใช่ไหม" },
        { id: "6", side: 'right', ...ROLES.nn, zh: "是的，你呢？", th: "ใช่ แล้วคุณล่ะ" },
        { id: "7", side: 'left', ...ROLES.bb, zh: "我不是韩国人", th: "ฉันไม่ใช่คนเกาหลี" },
        { id: "7-2", side: 'left', ...ROLES.bb, zh: "我是中国人。", th: "ฉันเป็นคนจีน" },
        { id: "8", side: 'left', ...ROLES.bb, zh: "他也是中国人。", th: "เขาก็เป็นคนจีนเหมือนกัน" },
        { id: "9", side: 'right', ...ROLES.nn, zh: "我喜欢红色", th: "ฉันชอบสีแดง" },
        { id: "9-2", side: 'right', ...ROLES.nn, zh: "你呢？", th: "แล้วคุณล่ะ" },
        { id: "10", side: 'left', ...ROLES.bb, zh: "我不喜欢红色。", th: "ฉันไม่ชอบสีแดง" },
        { id: "11", side: 'right', ...ROLES.nn, zh: "那你喜欢蓝色吗？", th: "งั้นคุณชอบสีน้ำเงินไหม" },
        { id: "12", side: 'left', ...ROLES.bb, zh: "是的，", th: "ใช่แล้ว" },
        { id: "12-2", side: 'left', ...ROLES.bb, zh: "我喜欢蓝色。", th: "ฉันชอบสีน้ำเงิน" },
        { id: "13", side: 'left', ...ROLES.bb, zh: "你几岁？", th: "คุณอายุเท่าไหร่" },
        { id: "14", side: 'right', ...ROLES.nn, zh: "我七岁，", th: "ฉัน 7 ขวบ" },
        { id: "14-2", side: 'right', ...ROLES.nn, zh: "你呢？", th: "แล้วคุณล่ะ" },
        { id: "15", side: 'left', ...ROLES.bb, zh: "我八岁，他呢？", th: "ฉัน 8 ขวบ แล้วเขาล่ะ" },
        { id: "16", side: 'right', ...ROLES.nn, zh: "他六岁。", th: "เขา 6 ขวบ" },
        { id: "17", side: 'right', ...ROLES.nn, zh: "你属什么？", th: "คุณเกิดปีนักษัตรอะไร" },
        { id: "18", side: 'left', ...ROLES.bb, zh: "我属牛。", th: "ฉันเกิดปีฉลู" },
        { id: "19", side: 'left', ...ROLES.bb, zh: "你属什么？", th: "คุณเกิดปีนักษัตรอะไร" },
        { id: "20", side: 'right', ...ROLES.nn, zh: "我属虎。", th: "ฉันเกิดปีขาล" },
        { id: "21", side: 'left', ...ROLES.bb, zh: "他是谁？", th: "เขาเป็นใคร" },
        { id: "22", side: 'right', ...ROLES.nn, zh: "他是我爸爸。", th: "เขาเป็นพ่อฉัน" },
        { id: "23", side: 'left', ...ROLES.bb, zh: "她们是谁？", th: "พวกเขาเป็นใคร" },
        { id: "24", side: 'right', ...ROLES.nn, zh: "她是我妈妈，", th: "คนนี้คือแม่ฉัน" },
        { id: "24-2", side: 'right', ...ROLES.nn, zh: "她是我姐姐。", th: "คนนี้คือพี่สาวฉัน" },
        { id: "25", side: 'left', ...ROLES.bb, zh: "你家有几口人？", th: "ครอบครัวของคุณมีกี่คน" },
        { id: "26", side: 'right', ...ROLES.nn, zh: "我家有五口人。", th: "ครอบครัวของฉันมี 5 คน" },
        { id: "27", side: 'left', ...ROLES.bb, zh: "你有哥哥吗？", th: "คุณมีพี่ชายไหม" },
        { id: "28", side: 'right', ...ROLES.nn, zh: "没有，", th: "ไม่มี " },
        { id: "28-2", side: 'right', ...ROLES.nn, zh: "我有姐姐。", th: "ฉันมีพี่สาว" },
        { id: "29", side: 'right', ...ROLES.nn, zh: "这是什么？", th: "นี่คืออะไร" },
        { id: "30", side: 'left', ...ROLES.bb, zh: "这是我的书包。", th: "นี่คือกระเป๋านักเรียนของฉัน" },
        { id: "31", side: 'right', ...ROLES.nn, zh: "那是什么？", th: "นั่นคืออะไร" },
        { id: "32", side: 'left', ...ROLES.bb, zh: "那是我妹妹的帽子。", th: "นั่นคือหมวกของน้องสาวฉัน" }
];

let learnedSentences = new Set(), isAudioPlaying = false, isChineseGlobal = false, totalCount = 0;
let userProfile = { name: "同学", avatar: "" };

const audioPlayer = new Audio();
const fxPlayer = new Audio(); 

const ui = {
    list: document.getElementById('list'),
    currentCount: document.getElementById('currentCount'),
    totalCount: document.getElementById('totalCount'),
    progress: document.getElementById('progressBar'),
    langWrapper: document.querySelector('.lang-wrapper'),
    langBtn: document.getElementById('langBtn'), // 保留它，因为下面动画还要用它
};

const getSafeId = (id) => String(id).replace(/[.-]/g, '_');
const getSortVal = (id) => {
    let clean = String(id).replace(/-/, '.');
    return isNaN(clean) ? 999 : parseFloat(clean);
};

async function init() {
    try {
        await liff.init({ liffId: "2009077149-N5kd2OBe" }); 
        if (!liff.isLoggedIn() && liff.isInClient()) {
            liff.login();
        } else {
            const profile = await liff.getProfile();
            userProfile.name = profile.displayName;
            userProfile.avatar = profile.pictureUrl;
        }
    } catch (err) { console.error("LIFF 启动失败:", err); }

    document.body.addEventListener('touchstart', unlockAudio, { once: true });

    rawData.sort((a, b) => getSortVal(a.id) - getSortVal(b.id));
    totalCount = rawData.filter(s => !/[a-zA-Z]/.test(String(s.id).replace('-',''))).length;
    ui.totalCount.textContent = totalCount;
    renderList();
    ui.langWrapper.onclick = toggleGlobalLanguage;
}

function unlockAudio() {
    audioPlayer.play().catch(()=>{}); audioPlayer.pause();
    fxPlayer.play().catch(()=>{}); fxPlayer.pause();
}

function renderList() {
    ui.list.innerHTML = "";
    rawData.forEach((s, index) => {
        const row = document.createElement('div');
        const isImage = /[a-zA-Z]/.test(String(s.id).replace('-','')) && !s.zh;
        const safeId = getSafeId(s.id);
        row.className = `message-row ${s.side}`;
        row.style.animationDelay = `${index * 0.05}s`;
        
        row.innerHTML = isImage ? `
            <div class="user-meta"><div class="avatar" style="background-image: url('${s.avatar}')"></div><div class="nickname">${s.name}</div></div>
            <div class="bubble-and-status"><div class="bubble image-bubble"><img src="${s.content || 'images/'+s.id+'.jpg'}?v=${VERSION}" loading="lazy" alt="img"></div></div>
        ` : `
            <div class="user-meta"><div class="avatar" style="background-image: url('${s.avatar}')"></div><div class="nickname">${s.name}</div></div>
            <div class="bubble-and-status">
                <div class="bubble" id="bubble-${safeId}">
                    <div class="zh-text" style="display: ${isChineseGlobal ? 'block' : 'none'}">${s.zh}</div>
                    <div class="th-text" style="display: ${isChineseGlobal ? 'none' : 'block'}">${s.th}</div>
                </div>
                <div class="trans-btn" id="trans-${safeId}">แปล</div>
                <div class="status-mark">已读 ✔</div>
            </div>
        `;

        if (!isImage) {
            row.querySelector(`#bubble-${safeId}`).onclick = () => handlePlay(s, row);
            row.querySelector(`#trans-${safeId}`).onclick = (e) => { 
                e.stopPropagation(); 
                toggleSingleLanguage(s.id); 
            };
        }
        ui.list.appendChild(row);
    });
}

async function playFX(file) {
    fxPlayer.src = `audio/${file}?v=${VERSION}`;
    fxPlayer.load();
    try { await fxPlayer.play(); } catch(e) {}
}

function handlePlay(s, element) {
    if (isAudioPlaying) return;
    isAudioPlaying = true;
    document.body.classList.add('locked-mode');
    element.classList.add('playing-now');

    audioPlayer.src = `audio/${s.id}.mp3?v=${VERSION}`;
    audioPlayer.load();
    
    audioPlayer.onended = () => {
        isAudioPlaying = false;
        document.body.classList.remove('locked-mode');
        element.classList.remove('playing-now');
        if (!learnedSentences.has(s.id)) {
            learnedSentences.add(s.id);
            element.classList.add('has-learned');
            updateScore(true); 
        } else {
            playFX('yinxiao-bubble.mp3');
        }
    };

    audioPlayer.play().catch(error => {
        console.error("播放失败:", error);
        audioPlayer.onended();
    });
}

function toggleSingleLanguage(id) {
    const bubble = document.getElementById(`bubble-${getSafeId(id)}`);
    const zh = bubble.querySelector('.zh-text'), th = bubble.querySelector('.th-text');
    const isZh = zh.style.display === 'block';
    zh.style.display = isZh ? 'none' : 'block';
    th.style.display = isZh ? 'block' : 'none';
}

//  修改后的全局切换函数
function toggleGlobalLanguage() {
    if (isAudioPlaying) return; // 如果声音正在播放，禁止切换，防止错乱
    
    isChineseGlobal = !isChineseGlobal;
    
    // 关键新增：让蓝色按钮的小球产生滑动动画
    if (ui.langBtn) {
        ui.langBtn.classList.toggle('chinese', isChineseGlobal);
    }
    
    // 切换所有句子的显示状态
    document.querySelectorAll('.zh-text').forEach(el => el.style.display = isChineseGlobal ? 'block' : 'none');
    document.querySelectorAll('.th-text').forEach(el => el.style.display = isChineseGlobal ? 'none' : 'block');
}

function updateScore(playDing) {
    const currentScore = learnedSentences.size;
    ui.currentCount.textContent = currentScore;
    ui.progress.style.width = `${(currentScore / totalCount) * 100}%`;
    if (playDing) { playFX('yinxiao-ding.mp3'); }
    if (currentScore >= totalCount && totalCount > 0) {
        setTimeout(showCongrats, 800);
    }
}

function showCongrats() {
    playFX('yinxiao-win.mp3');
    const now = new Date();
    const timeStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    document.getElementById('displayTime').textContent = timeStr;
    document.getElementById('userName').textContent = userProfile.name;
    document.getElementById('userImg').src = userProfile.avatar || 'images/default-avatar.jpg';
    document.getElementById('congrats-overlay').style.display = 'flex';
}

window.onload = init;