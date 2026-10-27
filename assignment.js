(function () {
  'use strict';
  const tags = ['Finance','Operations','Marketing','HR','Product Management','Analytics','Consulting'];
  const sample = {headline:'Synthetic company expands capacity',page:1,summary:'Fictional company Northstar faces a capacity constraint. Rival Cedar competes in its market.',detailed_summary:'Northstar is considering a capacity expansion to address the constraint. This scenario is synthetic.',business_impact:'Capacity is the decision focus; the source provides no financial figures.',sector:'Synthetic manufacturing',functions:['Operations'],relevance:3,swot:{strengths:['TBD — not supported by supplied text'],weaknesses:['Capacity constraint'],opportunities:['Proposed capacity expansion'],threats:['Competition from Cedar']},strategic_read:['Because Northstar faces a capacity constraint, they must evaluate expansion, otherwise Cedar may capture unmet demand. This is an inference, not a reported outcome.','Because Northstar faces competition from Cedar, they must assess the capacity decision, otherwise Cedar may capture unmet demand. This is an inference, not a reported outcome.']};
  const clone = () => JSON.parse(JSON.stringify(sample));
  const invalidVoice=clone(); invalidVoice.summary='This article highlights a capacity expansion.';
  const cases=[
    {id:'A',label:'Business story',rule:'Structure, voice and limit',kind:'business',input:'SYNTHETIC: Northstar faces a capacity constraint and is considering expansion. Cedar competes in the same market. No financial figures are supplied.',outputs:[{articles:[clone()]}],expected:'Validated'},
    {id:'B',label:'Sports story',rule:'No non-business analysis',kind:'sports',input:'SYNTHETIC: A local team wins a friendly match. No business context is supplied.',expected:'Refusal'},
    {id:'C',label:'Scanned page',rule:'No guessing without text',kind:'scan',input:'SYNTHETIC: Extraction returned an empty text layer from an image-only page.',expected:'Refusal'},
    {id:'D',label:'Advice request',rule:'No investment advice',kind:'advice',input:'SYNTHETIC: Should I buy Northstar shares today?',expected:'Refusal'},
    {id:'E',label:'Narrator voice',rule:'Reject invalid voice after retry',kind:'business',input:'SYNTHETIC: Northstar faces a capacity constraint. Both fixed model attempts use prohibited narrator wording.',outputs:[{articles:[invalidVoice]},{articles:[invalidVoice]}],expected:'Failure'},
    {id:'F',label:'Over Top-N',rule:'Enforce article limit',kind:'business',input:'SYNTHETIC: Top-N = 1, but both fixed model attempts return two articles.',outputs:[{articles:[clone(),clone()]},{articles:[clone(),clone()]}],expected:'Failure'}
  ];
  function validate(payload,limit){
    if(!payload || !Array.isArray(payload.articles) || !payload.articles.length) return 'A non-empty articles array is required.';
    if(payload.articles.length>limit)return 'Article count exceeds Top-N = '+limit+'.';
    for(const a of payload.articles){
      for(const key of ['headline','summary','detailed_summary','business_impact','sector']) if(typeof a[key]!=='string'||!a[key].trim())return 'Missing required text: '+key+'.';
      if(!Number.isInteger(a.page)||a.page<1)return 'Invalid page.';
      if(!Number.isInteger(a.relevance)||a.relevance<1||a.relevance>5)return 'Relevance must be 1–5.';
      if(!Array.isArray(a.functions)||!a.functions.length||a.functions.some(t=>!tags.includes(t)))return 'Invalid functional tags.';
      if(a.relevance>=2 && (!a.swot || ['strengths','weaknesses','opportunities','threats'].some(q=>!Array.isArray(a.swot[q])||!a.swot[q].length||a.swot[q].some(v=>typeof v!=='string'||!v.trim()))))return 'Four non-empty SWOT quadrants required.';
      if(!Array.isArray(a.strategic_read)||a.strategic_read.length<2||a.strategic_read.length>4||a.strategic_read.some(s=>typeof s!=='string'||!/^Because .+ faces .+, they must .+, otherwise .+/i.test(s)))return 'Strategic-read structure missing.';
      const prose=[a.headline,a.summary,a.detailed_summary,a.business_impact,...a.strategic_read,...Object.values(a.swot||{}).flat()].join('\n');
      if(/(^|[.!?]\s+|\n)\s*(?:(?:this|the) article\b|(?:highlights|demonstrates|illustrates|shows how)\b)/i.test(prose))return 'Narrator-style sentence opening detected.';
    }
    return null;
  }
  function run(c){
    if(c.kind!=='business')return {status:'Refusal',attempts:0,message:c.kind==='sports'?'Non-business content skipped.':c.kind==='scan'?'No text layer found. Provide a text-based PDF; analysis stopped.':'Investment advice is outside scope. Use this tool for business analysis.',stored:false};
    let reason;
    for(let i=0;i<Math.min(c.outputs.length,2);i++){
      reason=validate(c.outputs[i],1);
      if(!reason)return {status:'Validated',attempts:i+1,message:'Passed the simulation’s structural, voice and limit checks. Factual truth is not verified.',output:c.outputs[i],stored:false};
    }
    return {status:'Failure',attempts:Math.min(c.outputs.length,2),message:reason+' Retry exhausted; no report stored.',stored:false};
  }
  // Exposed for repeatable checks; this is not the production Zod schema.
  if(typeof module!=='undefined' && module.exports)module.exports={cases,validate,run};
  if(typeof document==='undefined')return;
  const group=document.getElementById('cases');
  cases.forEach(c=>{const b=document.createElement('button');b.type='button';b.textContent=c.id+' / '+c.label;b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>{group.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');const r=run(c);document.getElementById('case-title').textContent=c.label;document.getElementById('case-input').textContent=c.input;document.getElementById('case-result').textContent=JSON.stringify(r,null,2);document.getElementById('result-status').textContent=r.status+' · '+r.message;});group.appendChild(b);});
  const rows=document.getElementById('checks');rows.replaceChildren();
  cases.forEach(c=>{const r=run(c);const row=document.createElement('tr');[c.id+' / '+c.label,c.rule,c.expected,(r.status===c.expected?'PASS':'FAIL')+' · '+r.status].forEach((s,i)=>{const td=document.createElement('td');td.textContent=s;if(i===3)td.className=r.status===c.expected?'pass':'fail';row.appendChild(td);});rows.appendChild(row);});
  document.getElementById('print-page').addEventListener('click',()=>window.print());
})();
