# Port Master

## Portmaster is an application firewall that enforces application profiles on processes.

Being an application firewall means tightly integrating with the kernel of the underlying OS (via network filter APIs or kernel modules) to gain needed information (associate network packets to processes) and control (block or deny network connections).

Application profiles describe an application’s behaviour in the sense of how it interacts with the Internet: Does it connect to a fixed set of domains? Is it a peer to peer application? Does it interact with the local network? Should TLS be enforced and checked? etc.

Profiles represent an application as experienced by the user, not as defined by technology - making them easy to understand and superior to other common application classification approaches. They can be either created by users themselves or - most of the times - obtained through Stamp (explained later).