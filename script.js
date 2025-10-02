<!-- Whitney & Ame 캐릭터 옷장 치환 코드 -->
<script>
(function() {
    'use strict';
    
    console.log('[whitame_nanagom] 스크립트 실행 시작');
    
    // [whitame_nanagom] 텍스트를 찾아서 치환하는 함수
    async function replaceWhitameNanagom() {
        console.log('[whitame_nanagom] 치환 함수 실행');
        
        try {
            // 본문 영역 찾기
            const contentSelectors = [
                '.entry-content',
                '.tt_article_useless_p_margin',
                'article',
                '.post-content',
                '.contents_style',
                'body'  // 최후의 수단
            ];
            
            let contentElement = null;
            for (const selector of contentSelectors) {
                contentElement = document.querySelector(selector);
                if (contentElement) {
                    console.log('[whitame_nanagom] 본문 영역 발견:', selector);
                    break;
                }
            }
            
            if (!contentElement) {
                console.error('[whitame_nanagom] 본문 영역을 찾을 수 없습니다.');
                return;
            }
            
            // HTML 전체에서 [whitame_nanagom] 텍스트 찾기
            const bodyHTML = contentElement.innerHTML;
            
            if (!bodyHTML.includes('[whitame_nanagom]')) {
                console.log('[whitame_nanagom] 텍스트를 찾을 수 없습니다.');
                return;
            }
            
            console.log('[whitame_nanagom] 텍스트 발견! 치환 시작...');
            
            // CSS 파일 추가 및 로드 대기
            const loadResources = async () => {
                const promises = [];
                
                // CSS 파일 추가 (중복 방지)
                if (!document.querySelector('link[href*="whitame_nanagom@main/styles.css"]')) {
                    const cssPromise = new Promise((resolve, reject) => {
                        const cssLink = document.createElement('link');
                        cssLink.rel = 'stylesheet';
                        cssLink.href = 'https://cdn.jsdelivr.net/gh/Devi-ce/whitame_nanagom@main/styles.css';
                        cssLink.onload = () => {
                            console.log('[whitame_nanagom] CSS 로드 완료');
                            resolve();
                        };
                        cssLink.onerror = reject;
                        document.head.appendChild(cssLink);
                    });
                    promises.push(cssPromise);
                }
                
                // 모든 리소스 로드 대기
                if (promises.length > 0) {
                    await Promise.all(promises);
                    // CSS 적용을 위한 약간의 대기
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            };
            
            await loadResources();
            
            // Whitney & Ame 캐릭터 옷장 HTML
            const whitameNanagomHTML = `
<div class="nanagom-wardrobe">
    <div class="nanagom-main-container">
        <!-- 배경 레이어 -->
        <div class="nanagom-background-layer"></div>
        
        <div class="nanagom-characters-container">
            <!-- Whitney (왼쪽) -->
            <div class="nanagom-character-section">
                <img src="https://raw.githubusercontent.com/Devi-ce/whitame_nanagom/main/nanagom_whitney_name.png" class="nanagom-character-name-image" alt="Whitney">
                <div class="nanagom-character-display">
                    <div class="nanagom-character">
                        <!-- 메인 이미지 -->
                        <img id="nanagom-whitney-image" class="nanagom-character-image" alt="Whitney">
                    </div>
                </div>
                <div class="nanagom-controls">
                    <button class="nanagom-arrow-btn" onclick="changeNanagomOutfit('whitney', -1)">
                        <img src="https://raw.githubusercontent.com/Devi-ce/whitame_nanagom/main/nanagom_prev.png" alt="Previous">
                    </button>
                    <div class="nanagom-outfit-indicator" id="nanagom-whitney-indicator">교복1</div>
                    <button class="nanagom-arrow-btn" onclick="changeNanagomOutfit('whitney', 1)">
                        <img src="https://raw.githubusercontent.com/Devi-ce/whitame_nanagom/main/nanagom_next.png" alt="Next">
                    </button>
                </div>
            </div>
            
            <!-- Ame (오른쪽) -->
            <div class="nanagom-character-section">
                <img src="https://raw.githubusercontent.com/Devi-ce/whitame_nanagom/main/nanagom_ame_name.png" class="nanagom-character-name-image" alt="Ame">
                <div class="nanagom-character-display">
                    <div class="nanagom-character">
                        <!-- 메인 이미지 -->
                        <img id="nanagom-ame-image" class="nanagom-character-image" alt="Ame">
                    </div>
                </div>
                <div class="nanagom-controls">
                    <button class="nanagom-arrow-btn" onclick="changeNanagomOutfit('ame', -1)">
                        <img src="https://raw.githubusercontent.com/Devi-ce/whitame_nanagom/main/nanagom_prev.png" alt="Previous">
                    </button>
                    <div class="nanagom-outfit-indicator" id="nanagom-ame-indicator">교복1</div>
                    <button class="nanagom-arrow-btn" onclick="changeNanagomOutfit('ame', 1)">
                        <img src="https://raw.githubusercontent.com/Devi-ce/whitame_nanagom/main/nanagom_next.png" alt="Next">
                    </button>
                </div>
            </div>
        </div>
        
        <!-- frame2 레이어 (맨 위) -->
        <div class="nanagom-frame2-layer"></div>
    </div>
</div>
`;
            
            // HTML 치환
            const newHTML = bodyHTML.replace(/\[whitame_nanagom\]/g, whitameNanagomHTML);
            contentElement.innerHTML = newHTML;
            
            console.log('[whitame_nanagom] HTML 치환 완료');
            
            // JavaScript 파일 로드 (중복 방지)
            if (!document.querySelector('script[src*="whitame_nanagom@main/script.js"]')) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/gh/Devi-ce/whitame_nanagom@main/script.js';
                script.onload = function() {
                    console.log('[whitame_nanagom] JavaScript 로드 완료');
                    
                    // 초기 이미지 로드를 위한 추가 호출
                    setTimeout(() => {
                        if (typeof loadNanagomCharacterImage === 'function') {
                            loadNanagomCharacterImage('whitney', 1);
                            loadNanagomCharacterImage('ame', 1);
                            console.log('[whitame_nanagom] 초기 이미지 로드 시도');
                        }
                        
                        // 캐릭터 이미지 클릭 이벤트 재설정
                        const whitneyImg = document.getElementById('nanagom-whitney-image');
                        const ameImg = document.getElementById('nanagom-ame-image');
                        
                        if (whitneyImg && typeof playNanagomCharacterSound === 'function') {
                            whitneyImg.addEventListener('click', playNanagomCharacterSound);
                        }
                        if (ameImg && typeof playNanagomCharacterSound === 'function') {
                            ameImg.addEventListener('click', playNanagomCharacterSound);
                        }
                        
                        // 목차 재생성 (티스토리 목차 플러그인 사용 시)
                        if (typeof makeToc === 'function') {
                            const tocBox = document.getElementById('floating_toc');
                            if (tocBox) {
                                tocBox.innerHTML = '';
                            }
                            makeToc();
                            console.log('[whitame_nanagom] 목차 재생성 완료');
                        }
                        
                    }, 500);
                };
                script.onerror = function() {
                    console.error('[whitame_nanagom] JavaScript 로드 실패');
                };
                document.body.appendChild(script);
            }
            
            console.log('[whitame_nanagom] 치환 작업 완료');
            
        } catch (error) {
            console.error('[whitame_nanagom] 치환 오류:', error);
        }
    }
    
    // DOM 로드 완료 후 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replaceWhitameNanagom);
        console.log('[whitame_nanagom] DOMContentLoaded 이벤트 대기 중');
    } else {
        replaceWhitameNanagom();
    }
    
})();
</script>
<!-- Whitney & Ame 캐릭터 옷장 치환 코드 끝 -->
