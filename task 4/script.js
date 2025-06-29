const courses = [
  {
    id: 1,
    title: "HTML & CSS Basics",
    thumbnail: "https://via.placeholder.com/300x150?text=HTML+Course",
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    thumbnail: "https://via.placeholder.com/300x150?text=JavaScript+Course",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk"
  },
  {
    id: 3,
    title: "Responsive Web Design",
    thumbnail: "https://via.placeholder.com/300x150?text=Responsive+Design",
    videoUrl: "https://www.youtube.com/embed/srvUrASNj0s"
  }
];

const container = document.getElementById("courseContainer");
const videoSection = document.getElementById("videoSection");
const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");

courses.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";
  card.innerHTML = `
    <img src="${course.thumbnail}" alt="${course.title}" />
    <h3>${course.title}</h3>
  `;
  card.onclick = () => loadVideo(course);
  container.appendChild(card);
});

function loadVideo(course) {
  videoSection.classList.remove("hidden");
  videoPlayer.src = course.videoUrl;
  videoTitle.textContent = course.title;
  const progress = localStorage.getItem(`course-${course.id}`) || 0;
  progressBar.value = progress;
  progressPercent.textContent = `${progress}%`;
  videoPlayer.dataset.courseId = course.id;
}

function markComplete() {
  const courseId = videoPlayer.dataset.courseId;
  localStorage.setItem(`course-${courseId}`, 100);
  progressBar.value = 100;
  progressPercent.textContent = `100%`;
}
