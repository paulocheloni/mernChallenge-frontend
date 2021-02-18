export default async function addJob(data) {
  return fetch('http://localhost:3000/api/job', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
