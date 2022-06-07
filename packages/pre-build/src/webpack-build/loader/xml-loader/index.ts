import path from 'path';
import fs from 'fs-extra';
import attrParse from './attr-parse';
import ampEntry from '../../ampEntry';
import { isRelativeUrl } from '../../utils';
import { addQuery, Query } from '../addQuery';

const assetSet = new Set();

module.exports = function xmlLoader(this: any, source: any) {
  const { dir } = path.parse(this.resourcePath);
  const output = ampEntry.getResourceOutput(this.resourcePath);
  const json = '.json';

  const attributes = [
    'image:src',
    'audio:src',
    'video:src',
    'cover-image:src',
    'import:src',
    'include:src',
    'import-sjs:from',
  ];

  const links = attrParse(source, (tag: any, attr: any) => {
    const res = attributes.find(a => {
      if (a.charAt(0) === ':') {
        return attr === a.slice(1);
      } else {
        return tag + ':' + attr === a;
      }
    });
    return !!res;
  });

  const assets: Query[] = [];

  links
    .filter((link: any) => isRelativeUrl(link.value))
    .forEach((link: any) => {
      let currentPath = '';
      let outputPath = '';
      if (path.isAbsolute(link.value)) {
        currentPath = path.resolve(ampEntry.sourceRoot) + link.value;
        outputPath = ampEntry.getBaseOutput(currentPath);
      } else {
        currentPath = path.join(dir, link.value);
        outputPath = path.join(path.parse(output).dir, link.value);
      }

      // https://opendocs.alipay.com/mini/framework/axml-template
      const template = ['import', 'include'];
      if (!assetSet.has(currentPath) && template.includes(link.tag)) {
        const { dir, name } = path.parse(currentPath);
        const { dir: outDir } = path.parse(outputPath);

        const exts = [json];

        assets.push({
          resource: `${dir}/${name}`,
          options: {
            output: ampEntry.getRelativeOutput(`${outDir}/${name}`),
            type: 'entry',
          },
        });

        exts.forEach(ext => {
          let file = `${dir}/${name}${ext}`;
          if (fs.existsSync(file)) {
            file = `${file}${ext === json ? '?asConfig' : ''}`;
            assets.push({
              resource: file,
              options: { output: ampEntry.getRelativeOutput(`${outDir}/${name}${ext}`) },
            });
          }
        });

        assetSet.add(currentPath);
      }

      assets.push({
        resource: currentPath,
        options: { output: ampEntry.getRelativeOutput(outputPath) },
      });
    });

  return addQuery(assets);
};
