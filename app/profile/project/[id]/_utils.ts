export async function youtubeVideoIdExists(videoId: string) {
  const res = await fetch(`http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`, {
    method: "HEAD",
  });

  console.log(res);
  console.log(res.ok);

  return res.ok;
}

export async function githubRepoExists(repo: string) {
  const res = await fetch(`https://github.com/${repo}`, {
    method: "HEAD",
  });

  return res.ok;
}
