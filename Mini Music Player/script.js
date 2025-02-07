// 곡 목록 배열: 각 객체는 곡의 제목, 아티스트, 음원 파일 경로, 커버 이미지 경로를 포함합니다.
const songList = [
    {
        name: "Another World",
        artist: "ISEGYE IDOL",
        src: "assets/anotherworld.mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Snow halation",
        artist: "ISEGYE IDOL",
        src: "assets/snow.mp3",
        cover: "assets/2.jpg"
    },
    {
        name: "Dance Holl",
        artist: "LILPA",
        src: "assets/dance.mp3",
        cover: "assets/3.jpg"
    }
]

// HTML에서 필요한 요소들을 선택합니다.
const artistName = document.querySelector('.artist-name'); // 아티스트 이름을 표시할 영역
const musicName = document.querySelector('.song-name');      // 곡 제목을 표시할 영역
const fillBar = document.querySelector('.fill-bar');         // 진행률 막대의 채워진 부분
const time = document.querySelector('.time');                // 재생 시간(현재/전체)을 표시할 영역
const cover = document.querySelector('.cover');              // 곡 커버 이미지를 표시할 영역

// 아래 선택자들은 HTML에서 지정한 버튼의 클래스와 일치해야 합니다.
// (HTML과 일치하도록 클래스명을 수정하세요)
const playBtn = document.querySelector('.play');             // 재생/일시정지 버튼
const prevBtn = document.querySelector('.prev');             // 이전 곡 버튼
const nextBtn = document.querySelector('.next');             // 다음 곡 버튼
const prog = document.querySelector('.progress-bar');        // 전체 진행률 막대

// Audio 객체를 생성하여 음악을 재생할 준비를 합니다.
let song = new Audio();         // 새로운 Audio 객체 생성
let currentSong = 0;            // 현재 재생 중인 곡의 인덱스 (0부터 시작)
let playing = false;            // 재생 상태를 나타내는 변수 (false면 정지, true면 재생)

// DOM의 모든 요소가 로드된 후 초기화를 진행합니다.
document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);                   // 첫 번째 곡을 로드합니다.
    song.addEventListener('timeupdate', updateProgress); // 재생 중 시간이 업데이트 될 때마다 progress bar 갱신
    song.addEventListener('ended', nextSong);            // 현재 곡이 끝나면 다음 곡을 재생
    prevBtn.addEventListener('click', prevSong);         // 이전 곡 버튼 클릭 시 이전 곡 재생
    nextBtn.addEventListener('click', nextSong);         // 다음 곡 버튼 클릭 시 다음 곡 재생
    playBtn.addEventListener('click', togglePlayPause);    // 재생/일시정지 버튼 클릭 시 상태 전환
    prog.addEventListener('click', seek);                // 진행률 막대 클릭 시 원하는 위치로 이동
});

// 현재 인덱스에 해당하는 곡의 정보를 불러와서 화면에 업데이트합니다.
function loadSong(index) {
    // 구조분해 할당을 사용하여 곡 정보를 추출합니다.
    const { name, artist, src, cover: thumb } = songList[index];
    artistName.innerText = artist;               // 아티스트 이름 업데이트
    musicName.innerText = name;                  // 곡 제목 업데이트
    song.src = src;                              // Audio 객체에 음원 경로 할당
    cover.style.backgroundImage = `url(${thumb})`; // 커버 이미지 업데이트
}

// 재생 진행 상황을 업데이트하는 함수입니다.
function updateProgress() {
    if (song.duration) { // 곡의 총 길이가 존재할 때
        // 현재 재생 시간과 전체 시간의 비율을 계산하여 진행률 막대의 너비를 설정합니다.
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        // 현재 재생 시간과 전체 시간을 "분:초" 형식으로 변환하여 표시합니다.
        const duration = formatTime(song.duration);
        const currentTime = formatTime(song.currentTime);
        time.innerText = `${currentTime} - ${duration}`;
    }
}

// 초(seconds)를 "분:초" 형식의 문자열로 변환하는 함수입니다.
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);   // 분 계산
    const secs = Math.floor(seconds % 60);        // 남은 초 계산
    // 초가 10 미만이면 앞에 0을 추가하여 두 자리 숫자로 표시
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// 재생과 일시정지를 토글하는 함수입니다.
function togglePlayPause() {
    if (playing) {
        song.pause();  // 재생 중이면 일시정지
    } else {
        song.play();   // 정지 상태이면 재생 시작
    }
    playing = !playing; // 재생 상태 반전

    // 버튼 아이콘 변경: 재생 중이면 일시정지 아이콘, 정지 중이면 재생 아이콘을 보여줍니다.
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);

    // 커버 이미지에 애니메이션 효과 적용 (active 클래스가 있으면 회전 등 효과 적용)
    cover.classList.toggle('active', playing);
}

// 다음 곡으로 넘어가는 함수입니다.
function nextSong() {
    // 현재 곡 인덱스를 1 증가, 배열의 끝에 도달하면 처음으로 순환
    currentSong = (currentSong + 1) % songList.length;
    playMusic(); // 변경된 곡을 재생합니다.
}

// 이전 곡으로 돌아가는 함수입니다.
function prevSong() {
    // 현재 곡 인덱스를 1 감소, 음수가 되면 배열의 마지막 곡으로 순환
    currentSong = (currentSong - 1 + songList.length) % songList.length;
    playMusic(); // 변경된 곡을 재생합니다.
}

// 곡을 로드하고 재생 상태를 업데이트하는 함수입니다.
function playMusic() {
    loadSong(currentSong); // 현재 곡 정보를 불러옵니다.
    song.play();           // 곡 재생 시작
    playing = true;        // 재생 상태 업데이트

    // 버튼 아이콘과 커버 이미지에 재생 중 상태를 반영합니다.
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    cover.classList.add('active');
}

// 진행률 막대를 클릭하면 해당 위치로 재생 시간을 이동시키는 함수입니다.
function seek(e) {
    // 클릭한 위치의 x좌표와 전체 진행률 막대의 너비를 비교하여 재생 위치 계산
    const pos = (e.offsetX / prog.clientWidth) * song.duration;
    song.currentTime = pos; // 계산된 위치로 재생 시간을 설정
}
