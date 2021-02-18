export default async function addPages(data) {
  return fetch('http://localhost:3000/api/teste', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
