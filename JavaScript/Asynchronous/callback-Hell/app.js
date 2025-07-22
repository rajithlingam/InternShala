function fstcall(val, callfun) {
  setTimeout(() => {
    val += 1;
    callfun(val);
  }, 2000);
}

function sndcall(val, callfun) {
  val += 1;
  callfun(val);
}

function trdcall(val, callfun) {
  val += 1;
  callfun(val);
}

function fthcall(val, callfun) {
  val += 1;
  callfun(val);
}

fstcall(0, (fstdata) => {
  console.log(`fstcall: ${fstdata}`);
  sndcall(fstdata, (snddata) => {
    console.log(`sndcall: ${snddata}`);
    trdcall(snddata, (trddata) => {
      console.log(`trdcall: ${trddata}`);
      fthcall(trddata, (fthdata) => {
        console.log(`frthcall: ${fthdata}`);
      });
    });
  });
});
