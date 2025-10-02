        // 클릭 사운드 초기화
        const clickSound = new Audio('https://raw.githubusercontent.com/Devi-ce/tistory/main/click_sound.mp3');
        clickSound.volume = 0.5; // 볼륨 설정 (0.0 ~ 1.0)
        
        // 캐릭터 클릭 사운드 초기화
        const characterSound = new Audio('https://raw.githubusercontent.com/Devi-ce/tistory/main/snd_movemenu.wav');
        characterSound.volume = 0.5;

        // 사운드 재생 함수
        function playClickSound() {
            clickSound.currentTime = 0; // 재생 위치 리셋
            clickSound.play().catch(e => console.log('Sound play failed:', e));
        }
        
        // 캐릭터 사운드 재생 함수
        function playCharacterSound() {
            characterSound.currentTime = 0;
            characterSound.play().catch(e => console.log('Character sound play failed:', e));
        }

        // 각 캐릭터의 현재 의상 인덱스
        const currentOutfit = {
            whitney: 1,
            ame: 1
        };

        // 각 캐릭터의 최대 의상 수
        const maxOutfits = {
            whitney: 5,  // Whitney는 5개
            ame: 8       // Ame는 8개
        };

        // 각 캐릭터의 의상 이름
        const outfitNames = {
            whitney: {
                1: '교복1',
                2: '교복2',
                3: '사복1',
                4: '사복2',
                5: 'if'
            },
            ame: {
                1: '교복1',
                2: '교복2',
                3: '교복3',
                4: '사복1',
                5: '사복2',
                6: '사복3',
                7: '사복4',
                8: 'if'
            }
        };

        // nanagom 캐릭터 이미지 URL 설정
        const imageUrls = {
            whitney: {
                1: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Whitney_nanagom1.png',
                2: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Whitney_nanagom2.png',
                3: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Whitney_nanagom3.png',
                4: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Whitney_nanagom4.png',
                5: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Whitney_nanagom5.png'
            },
            ame: {
                1: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom1.png',
                2: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom2.png',
                3: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom3.png',
                4: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom4.png',
                5: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom5.png',
                6: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom6.png',
                7: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom7.png',
                8: 'https://raw.githubusercontent.com/Devi-ce/tistory/main/Ame_nanagom8.png'
            }
        };

        // 이미지 로드 시도 함수
        function loadCharacterImage(character, outfitNumber) {
            const imageElement = document.getElementById(`${character}-image`);
            
            if (imageUrls[character] && imageUrls[character][outfitNumber]) {
                const img = new Image();
                img.onload = function() {
                    imageElement.src = this.src;
                    imageElement.style.display = 'block';
                };
                img.onerror = function() {
                    // 이미지 로드 실패 시 빈 화면
                    imageElement.style.display = 'none';
                };
                img.src = imageUrls[character][outfitNumber];
            }
        }

        // 이미지 전환
        function changeOutfitImage(character, outfitNumber) {
            const imageElement = document.getElementById(`${character}-image`);
            
            if (imageUrls[character] && imageUrls[character][outfitNumber]) {
                const img = new Image();
                img.onload = function() {
                    imageElement.src = this.src;
                    imageElement.style.display = 'block';
                };
                img.onerror = function() {
                    imageElement.style.display = 'none';
                };
                img.src = imageUrls[character][outfitNumber];
            }
        }

        function changeOutfit(character, direction) {
            // 클릭 사운드 재생
            playClickSound();
            
            // 현재 의상 인덱스 업데이트
            currentOutfit[character] += direction;

            // 범위 체크 (순환)
            if (currentOutfit[character] > maxOutfits[character]) {
                currentOutfit[character] = 1;
            } else if (currentOutfit[character] < 1) {
                currentOutfit[character] = maxOutfits[character];
            }

            // 이미지 즉시 전환
            changeOutfitImage(character, currentOutfit[character]);

            // 인디케이터 업데이트
            const indicatorElement = document.getElementById(`${character}-indicator`);
            indicatorElement.textContent = `${currentOutfit[character]} / ${maxOutfits[character]}`;

            // 의상 이름 업데이트
            const outfitNameElement = document.getElementById(`${character}-outfit-name`);
            outfitNameElement.textContent = outfitNames[character][currentOutfit[character]];
        }

        // 페이지 로드 시 초기 이미지 로드 시도
        window.addEventListener('load', () => {
            loadCharacterImage('whitney', 1);
            loadCharacterImage('ame', 1);
        });

        // 키보드 컨트롤 추가
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                changeOutfit('whitney', -1);
            } else if (e.key === 'ArrowRight') {
                changeOutfit('whitney', 1);
            } else if (e.key === 'a' || e.key === 'A') {
                changeOutfit('ame', -1);
            } else if (e.key === 'd' || e.key === 'D') {
                changeOutfit('ame', 1);
            }
        });
