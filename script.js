document.addEventListener('DOMContentLoaded', function() {
    const techDetailBtn = document.getElementById('techDetailBtn');
    techDetailBtn.addEventListener('click', function() {
        alert('核心技术：\n\n1. 循环卷积混合模型 (R-CNN)：结合CNN的空间特征提取与LSTM的时间序列分析能力，对哭声频谱图进行深度理解。\n\n2. 多模态融合：60GHz毫米波雷达同步监测婴儿肢体动作与呼吸，与音频交叉验证，大幅降低环境噪音误报。\n\n3. 端-边-云协同：核心算法在本地边缘设备运行，保障离线可用性与隐私安全。');
    });

    const crySimulateBtn = document.getElementById('crySimulateBtn');
    const analysisResult = document.getElementById('analysisResult');

    const possibleResults = [
        {
            emotion: "饥饿",
            confidence: "96%",
            description: "哭声节奏规律，短促有力，伴随吮吸动作。",
            suggestion: "建议：检查喂奶时间，准备喂食。"
        },
        {
            emotion: "困倦",
            confidence: "88%",
            description: "哭声呈呜咽状，音调较低，可能伴随揉眼睛、打哈欠。",
            suggestion: "建议：营造安静、昏暗的睡眠环境，轻柔安抚。"
        },
        {
            emotion: "胀气不适",
            confidence: "93%",
            description: "哭声突然、尖锐，身体可能蜷缩、蹬腿。",
            suggestion: "建议：尝试飞机抱或顺时针按摩腹部，帮助排气。"
        },
        {
            emotion: "需要关注",
            confidence: "82%",
            description: "哭声断断续续，音量适中，在被抱起或听到声音后缓解。",
            suggestion: "建议：给予拥抱、抚触或温柔的对话互动。"
        }
    ];

    crySimulateBtn.addEventListener('click', function() {
        crySimulateBtn.disabled = true;
        crySimulateBtn.textContent = '分析中...';

        setTimeout(() => {
            const randomResult = possibleResults[Math.floor(Math.random() * possibleResults.length)];

            analysisResult.innerHTML = `
                <h3>分析完成！</h3>
                <p><strong>识别情绪：</strong> ${randomResult.emotion}</p>
                <p><strong>AI置信度：</strong> <span style="color: #1a6dcc; font-weight: bold;">${randomResult.confidence}</span></p>
                <p><strong>特征描述：</strong> ${randomResult.description}</p>
                <p><strong>护理建议：</strong> ${randomResult.suggestion}</p>
            `;

            analysisResult.classList.add('highlight');

            crySimulateBtn.disabled = false;
            crySimulateBtn.textContent = '模拟宝宝哭声（点击分析）';

            setTimeout(() => {
                analysisResult.classList.remove('highlight');
            }, 3000);

        }, 2000);
    });
});