function sortList() {
  const list = document.querySelector('ul');
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/\D/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/\D/g, ''));

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployeesArray() {
  const items = document.querySelectorAll('ul li');

  return Array.from(items).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: Number(li.dataset.salary.replace(/\D/g, '')),
    age: Number(li.dataset.age),
  }));
}

sortList();

const employees = getEmployeesArray();

print(employees);
