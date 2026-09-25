/* ════════════════════════════════════════
   SelesaiIn — Main Script
   ════════════════════════════════════════ */

// ── Validation helpers ──────────────────────────────────────────────────────

function validateEmail(value) {
  if (!value) return 'Email tidak boleh kosong.';
  if (!value.includes('@')) return 'Email harus mengandung karakter "@".';
  return null;
}

function validatePassword(value) {
  if (!value) return 'Kata sandi tidak boleh kosong.';
  if (value.length < 5) return 'Kata sandi minimal 5 karakter.';
  if (!/[0-9]/.test(value)) return 'Kata sandi harus mengandung minimal satu angka.';
  if (!/[^A-Za-z0-9]/.test(value)) return 'Kata sandi harus mengandung minimal satu karakter spesial (contoh: !@#$%).';
  return null;
}

function showError(id, message) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message || '';
  el.style.display = message ? 'block' : 'none';
}

function setInputState(inputId, hasError) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.classList.toggle('input-error', hasError);
  input.classList.toggle('input-valid', !hasError && input.value.length > 0);
}

// ── Page navigation ─────────────────────────────────────────────────────────

function goToDashboard() {
  const emailVal = document.getElementById('loginEmail').value.trim();
  const passwordVal = document.getElementById('loginPassword').value;

  const emailErr = validateEmail(emailVal);
  const passwordErr = validatePassword(passwordVal);

  showError('emailError', emailErr);
  showError('passwordError', passwordErr);
  setInputState('loginEmail', !!emailErr);
  setInputState('loginPassword', !!passwordErr);

  if (emailErr || passwordErr) return; // stop if validation fails

  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('dashboardPage').style.display = 'block';
}

function logout() {
  document.getElementById('dashboardPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  showError('emailError', null);
  showError('passwordError', null);
  setInputState('loginEmail', false);
  setInputState('loginPassword', false);
}

// ── Password visibility toggle ───────────────────────────────────────────────

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('loginPassword');
  const eyeIcon = document.querySelector('.eye-icon');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.style.opacity = '1';
  } else {
    passwordInput.type = 'password';
    eyeIcon.style.opacity = '0.5';
  }
}

// ── Sidebar ──────────────────────────────────────────────────────────────────

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
  const fab = document.getElementById('fab');
  if (fab) fab.classList.add('hidden');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('backdrop').classList.remove('open');
  const fab = document.getElementById('fab');
  if (fab) fab.classList.remove('hidden');
}

// ── Priority selection ───────────────────────────────────────────────────────

function selectPriority(btn) {
  document.querySelectorAll('.priority-btn').forEach(b => {
    b.classList.remove('sel-low', 'sel-medium', 'sel-high');
  });
  btn.classList.add('sel-' + btn.dataset.p);
}

// ── DOM-ready setup ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Login button
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) loginBtn.addEventListener('click', goToDashboard);

  // Toggle password button
  const toggleBtn = document.getElementById('togglePasswordBtn');
  if (toggleBtn) toggleBtn.addEventListener('click', togglePasswordVisibility);

  // Clear email error on input
  const emailInput = document.getElementById('loginEmail');
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const err = validateEmail(emailInput.value.trim());
      showError('emailError', err);
      setInputState('loginEmail', !!err);
    });
  }

  // Clear password error on input
  const passwordInput = document.getElementById('loginPassword');
  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      const err = validatePassword(passwordInput.value);
      showError('passwordError', err);
      setInputState('loginPassword', !!err);
    });
  }

  // View toggle (Kanban / List)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Status tabs (filter card)
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Close sidebar on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });
});
