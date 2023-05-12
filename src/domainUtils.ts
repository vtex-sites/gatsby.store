export const getDomain = (url, subdomain) => {
  subdomain = subdomain || false;

  url = url.toString().replace(/(https?:\/\/)?(www.)?/i, '');

  // Validates if it's an internal env
  if (url.includes('myvtex') || url.includes('vtexcommercestable')) {
    return 'internal';
  }

  if (!subdomain) {
    url = url.split('.');

    url = url.slice(url.length - 2).join('.');

    const sub = '.';

    url = sub.concat(url);
  }

  if (url.indexOf('/') !== -1) {
    return url.split('/')[0];
  }

  return url;
};
