import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const [, , commitMessageFile, commitSource] = process.argv;

if (!commitMessageFile || commitSource === 'merge') {
  process.exit(0);
}

const branchName = execFileSync('git', ['symbolic-ref', '--short', 'HEAD'], {
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'ignore'],
}).trim();

const match = branchName.match(/^(#\d+)\//);

if (!match) {
  process.exit(0);
}

const [, taskNumber] = match;

const message = readFileSync(commitMessageFile, 'utf8');
const lines = message.split(/\r?\n/);
const [firstLine] = lines;

const hasTaskNumber = /\(#\d+\)$/.test(firstLine);

if (!hasTaskNumber) {
  lines[0] = `${firstLine} (${taskNumber})`;

  writeFileSync(commitMessageFile, lines.join('\n'));
}
