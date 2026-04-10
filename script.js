// LERP Formula: Start + (End - Start) * t
function lerp(a, b, t) {
    return a + (b - a) * t;
}

let t = 0;
const startPos = 0;
const endPos = 470; // 500px track - 30px ball width
let anim;

function runAnimation() {
    t = 0; // Reset interpolation factor
    animate();
}

function animate() {
    if (t <= 1.001) {
        const ball = document.getElementById('ball');
        const tDisplay = document.getElementById('t-val');
        const posDisplay = document.getElementById('pos-val');

        // Apply LERP
        const currentX = lerp(startPos, endPos, t);

        // Update Visuals
        ball.style.left = currentX + 'px';
        tDisplay.innerText = t.toFixed(2);
        posDisplay.innerText = Math.round(currentX);

        // Increment t (speed of animation)
        t += 0.005; 

        anim = requestAnimationFrame(animate);
    } else {
        cancelAnimationFrame(anim);
    }
}