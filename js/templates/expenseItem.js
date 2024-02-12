
function expenseItemTemplte(data) {
    const template = `
    <section class="bg-zinc-50 border-l-4 shadow-sm p-4">
    ${data}
    </section>
    `;
    return template;

}
export{expenseItemTemplte};