const config = {
    form: {
        url: '',
        fields: {
            name: '',
            objective: '',
        }
    },
    lastCannotRA: 7
}

if(document.domain.includes('sbgbook.xyz') && document.URL.includes('student') && !document.ran) {
    document.ran = true;
    setTimeout(() => {
        let score = 0;
        let total = 0;
        document.querySelectorAll('.scorehover').forEach((a) => { score += Number(a.innerHTML.split('<')[0]); total += 10 });
        document.querySelectorAll('.overall-grade-text')[0].innerHTML = String(((score / total) * 100).toFixed(2)) + "%";

//         const scorecards = document.querySelectorAll('[title="View scores/feedback"]');
//         scorecards.forEach((a, idx) => {
//             a.style.display = 'block';
//             a.style.textAlign = 'center';
//             document.querySelectorAll('th')[idx].innerHTML.split('\n')[0];
//             if(scorecards.length - config.lastCannotRA <= idx) return;
//             let inner = document.createElement('a');
//             inner.innerHTML = 'RA';
//             inner.href = `${config.form.url}?entry.${config.form.fields.name}=${document.querySelectorAll('.scorehead')[0].innerHTML.split('>')[2].split('<')[0]}&entry.${config.form.fields.objective}=${document.querySelectorAll('th')[idx].innerHTML.split('\n')[0]}`;
//             a.appendChild(inner);
//         });
    }, 2150);
}
