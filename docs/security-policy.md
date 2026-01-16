# Genesis Security Policy

**Version:** 1.0
**Last Updated:** January 2026
**Owner:** [Security Lead]
**Review Cycle:** Annual (or upon significant change)

---

## Executive Summary

Genesis is committed to protecting customer data through comprehensive security controls. This policy establishes the security framework governing how we build, operate, and maintain our systems. It applies to all Genesis personnel, contractors, and systems.

Our security approach is based on:

- **Security by design:** Security is built into systems from the start, not added later
- **Defence in depth:** Multiple layers of controls protect against single points of failure
- **Least privilege:** Access is limited to the minimum necessary
- **Transparency:** We document our practices and share them with customers and partners

---

## 1. Overview

### 1.1 Purpose

This policy defines the security requirements, controls, and practices that Genesis implements to protect:

- Customer data (LinkedIn exports, intent declarations, Genesis Profiles)
- System integrity and availability
- Genesis's reputation and customer trust

### 1.2 Scope

This policy applies to:

- All Genesis employees and contractors
- All systems, applications, and infrastructure
- All data processed by Genesis
- All third-party services used by Genesis

### 1.3 Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **Founders** | Ultimate accountability for security; approval of policy; resource allocation |
| **Security Lead** | Policy development; security programme management; incident response coordination |
| **Engineering Team** | Secure development practices; system security configuration; vulnerability remediation |
| **All Personnel** | Compliance with this policy; reporting security concerns; completing security training |

### 1.4 Policy Exceptions

Exceptions to this policy require:

- Written request explaining the business need
- Risk assessment documenting the impact
- Approval from the Security Lead and a Founder
- Time-limited exception with review date
- Compensating controls where possible

---

## 2. Organisational Security

### 2.1 Personnel Security

**Background Checks**

- All employees undergo background verification before starting
- Verification includes identity confirmation and reference checks
- Sensitive roles require additional verification

**Confidentiality**

- All personnel sign confidentiality agreements before accessing systems
- Confidentiality obligations survive employment termination

**Security Training**

- All personnel complete security awareness training within 30 days of joining
- Annual refresher training is mandatory
- Role-specific training for personnel handling sensitive data or systems

### 2.2 Acceptable Use

**Company Systems**

- Company systems are for business purposes
- Limited personal use is permitted if it doesn't interfere with work or security
- No installation of unauthorised software

**Prohibited Activities**

- Accessing systems or data without authorisation
- Sharing credentials with others
- Circumventing security controls
- Storing company data on personal devices without approval

### 2.3 Remote Work Security

**Network Security**

- VPN required when accessing production systems remotely
- Public WiFi prohibited for work activities involving sensitive data
- Home network security guidance provided to all remote workers

**Physical Security**

- Clean desk: Sensitive information must not be visible when away from workspace
- Screen lock: Devices must lock automatically after 5 minutes of inactivity
- Secure disposal: Paper documents containing sensitive information must be shredded

### 2.4 Offboarding

When personnel leave Genesis:

- Access revoked within 24 hours of departure
- Return of all company equipment and data
- Exit interview including security reminders
- Removal from all systems, groups, and distribution lists

---

## 3. Infrastructure Security

### 3.1 Architecture

**Cloud-Only**

- Genesis operates entirely on cloud infrastructure
- No on-premise servers or data centres
- Primary provider: Supabase (database), additional providers for specific services

**Data Residency**

- Customer data stored in UK/EU data centres (Supabase Frankfurt region)
- Processing may occur in approved locations with appropriate safeguards
- No customer data stored in unapproved jurisdictions

### 3.2 Network Security

**Firewalls**

- Web application firewall (WAF) protects all public endpoints
- Firewall rules follow deny-by-default principle
- Rules reviewed quarterly

**Network Segmentation**

- Production, staging, and development environments are isolated
- No direct access from development to production
- Database access restricted to application servers only

**DDoS Protection**

- Cloud-based DDoS mitigation enabled on all public endpoints
- Automatic detection and mitigation of volumetric attacks
- Incident alerting for significant attacks

### 3.3 Server Security

**Hardening**

- Systems deployed using hardened base images
- Unnecessary services disabled
- Default credentials changed before deployment

**Patching**

| Severity | Patch Timeline |
|----------|----------------|
| Critical (CVSS 9.0+) | 7 days |
| High (CVSS 7.0-8.9) | 14 days |
| Medium (CVSS 4.0-6.9) | 30 days |
| Low (CVSS < 4.0) | Next scheduled maintenance |

**Monitoring**

- All systems send logs to centralised logging
- Automated alerts for suspicious activity
- Regular review of security logs

---

## 4. Application Security

### 4.1 Secure Development Lifecycle

**Requirements**

- Security requirements defined for each feature
- Threat modelling for significant changes
- Security review checkpoint before production deployment

**Design**

- Security architecture review for new components
- Use of established security patterns
- Avoiding reinvention of security controls

**Implementation**

- Secure coding guidelines followed
- Sensitive data handling procedures documented
- Security-focused code review for high-risk changes

**Testing**

- Unit tests for security-critical functions
- Integration tests for authentication and authorisation
- Pre-release security review

### 4.2 Code Security

**Version Control**

- All code stored in version control (Git)
- Branch protection on main branches
- Commit signing encouraged

**Code Review**

- All changes require peer review before merge
- Security-sensitive changes require additional review
- Review checklist includes security items

**Secrets Management**

- No secrets in source code (enforced by automated scanning)
- Secrets stored in secure secrets management service
- Secrets rotated according to schedule

### 4.3 Dependency Management

**Vulnerability Scanning**

- Automated scanning of dependencies
- Alerts for known vulnerabilities
- Critical vulnerabilities addressed within 7 days

**Dependency Updates**

- Dependencies reviewed monthly
- Security updates prioritised
- Compatibility testing before updates

### 4.4 API Security

**Authentication**

- All API endpoints require authentication
- API keys for service authentication
- Token-based authentication for user sessions

**Authorisation**

- Role-based access control
- Permissions checked on every request
- Audit logging of access decisions

**Rate Limiting**

- Rate limits on all API endpoints
- Per-user and per-IP limits
- Graduated response (warning, then blocking)

**Input Validation**

- All inputs validated before processing
- Type checking, length limits, format validation
- Rejection of malformed requests

---

## 5. Data Security

### 5.1 Data Classification

| Classification | Description | Examples | Controls |
|----------------|-------------|----------|----------|
| **Public** | Information intended for public release | Marketing materials, blog posts | No special controls |
| **Internal** | Information for internal use | Internal documentation, procedures | Access limited to Genesis personnel |
| **Confidential** | Sensitive business information | Customer lists, financial data | Encryption, access logging, need-to-know |
| **Restricted** | Highly sensitive data | Customer LinkedIn data, credentials | Encryption, strict access control, audit logging, monitoring |

### 5.2 Encryption

**At Rest**

- All customer data encrypted at rest using AES-256
- Encryption keys managed by cloud provider with Genesis-controlled key management
- Database backups encrypted

**In Transit**

- TLS 1.3 required for all external connections
- TLS 1.2 minimum for internal connections
- Certificate management automated with monitoring for expiry

**Key Management**

- Encryption keys stored separately from encrypted data
- Key rotation: annually or upon suspected compromise
- Key access logged and monitored

### 5.3 Data Minimisation

- Only collect data necessary for the service
- Delete data when no longer needed
- Anonymise data where possible for analytics

### 5.4 Data Retention and Deletion

| Data Type | Retention Period | Deletion Method |
|-----------|------------------|-----------------|
| Active customer data | Duration of subscription | Cryptographic erasure |
| Cancelled customer data | 30 days after cancellation | Cryptographic erasure |
| Backups | 90 days | Automatic expiry |
| Logs | 12 months | Automatic purge |
| Inactive accounts | 24 months, then deletion | Cryptographic erasure |

### 5.5 Secure Deletion

- Cryptographic erasure (key destruction) for encrypted data
- Verification of deletion completion
- Deletion certificates available upon request

---

## 6. Access Control

### 6.1 Principles

- **Least privilege:** Users receive minimum access needed for their role
- **Need to know:** Access to sensitive data only for specific business purposes
- **Separation of duties:** Critical functions require multiple people

### 6.2 Identity Management

**Account Provisioning**

- Accounts created only upon approval from manager
- Unique identifiers for all accounts
- No shared accounts

**Account Deprovisioning**

- Accounts disabled immediately upon role change or termination
- Quarterly review of dormant accounts
- Automatic disabling after 90 days of inactivity

### 6.3 Authentication

**Password Requirements**

- Minimum 12 characters
- Complexity requirements (upper, lower, number, special)
- No password reuse (last 12 passwords)
- Password manager recommended

**Multi-Factor Authentication**

- MFA required for all systems
- Hardware tokens or authenticator apps (no SMS)
- MFA enforcement verified quarterly

### 6.4 Authorisation

**Role-Based Access Control**

| Role | Access Level |
|------|--------------|
| Administrator | Full system access |
| Developer | Development and staging environments |
| Support | Customer data access for support purposes (logged) |
| Analyst | Anonymised/aggregated data only |

**Privileged Access**

- Elevated access requires separate approval
- Privileged sessions monitored and logged
- Privileged access time-limited where possible

### 6.5 Access Reviews

- Quarterly review of all access permissions
- Manager certification of team access
- Removal of unnecessary access
- Documentation of review outcomes

---

## 7. Incident Response

### 7.1 Definition

A security incident is any event that:

- Compromises the confidentiality, integrity, or availability of data or systems
- Violates security policy
- Indicates attempted or successful unauthorised access

### 7.2 Severity Levels

| Level | Definition | Response Time | Examples |
|-------|------------|---------------|----------|
| **Critical** | Active breach with significant data exposure | Immediate | Confirmed data exfiltration, ransomware |
| **High** | Likely breach or significant vulnerability exploitation | 1 hour | Successful authentication bypass, exploitation attempt |
| **Medium** | Potential security issue requiring investigation | 4 hours | Suspicious activity, policy violation |
| **Low** | Minor security event | 24 hours | Failed attack attempts, minor policy deviation |

### 7.3 Response Team

| Role | Responsibility |
|------|----------------|
| **Incident Commander** | Overall coordination, decision-making |
| **Technical Lead** | Investigation, containment, remediation |
| **Communications Lead** | Internal and external communications |
| **Legal Liaison** | Legal implications, regulatory notification |

### 7.4 Response Phases

1. **Detection:** Identify and confirm the incident
2. **Containment:** Limit the scope and impact
3. **Eradication:** Remove the threat from systems
4. **Recovery:** Restore normal operations
5. **Post-Incident Review:** Document lessons learned

Detailed procedures are in **Appendix B: Incident Response Playbook**.

### 7.5 Communication

**Internal Communication**

- Incident Commander notifies leadership immediately for Critical/High incidents
- Status updates at defined intervals
- All-hands communication for significant incidents

**External Communication**

- Customer notification within 48 hours for incidents affecting their data
- Regulatory notification as required by law (ICO within 72 hours if applicable)
- No public disclosure without leadership approval

### 7.6 Post-Incident Review

- Review completed within 7 days of incident closure
- Root cause analysis documented
- Remediation actions tracked to completion
- Lessons learned shared with team

---

## 8. Business Continuity

### 8.1 Backup Procedures

**Backup Schedule**

| Data Type | Frequency | Retention |
|-----------|-----------|-----------|
| Database | Daily | 90 days |
| Configuration | On change | 30 days |
| Logs | Continuous | 12 months |

**Backup Security**

- Backups encrypted using separate keys
- Backup integrity verified weekly
- Backups stored in separate region from production

### 8.2 Recovery Objectives

| Metric | Target |
|--------|--------|
| **Recovery Point Objective (RPO)** | 24 hours |
| **Recovery Time Objective (RTO)** | 4 hours |

### 8.3 Disaster Recovery

**Scenarios**

- Primary data centre failure
- Data corruption or loss
- Denial of service attack
- Key personnel unavailability

**Recovery Procedures**

- Documented runbooks for each scenario
- Contact lists for vendors and personnel
- Pre-authorised emergency procedures

### 8.4 Testing

- Backup restoration tested quarterly
- Full disaster recovery test annually
- Results documented and issues remediated

---

## 9. Compliance

### 9.1 Regulatory Framework

**UK GDPR / Data Protection Act 2018**

- Data protection by design and default
- Lawful basis for processing documented
- Data subject rights procedures established
- Data Protection Impact Assessments where required

**ICO Registration**

- Genesis is registered with the Information Commissioner's Office
- Registration reviewed annually

### 9.2 Contractual Requirements

- Data Processing Agreements with customers
- Sub-processor agreements in place
- Regular review of contractual security obligations

### 9.3 Audit and Certification

| Activity | Frequency |
|----------|-----------|
| Internal security assessment | Quarterly |
| External penetration test | Annually |
| Vendor security review | Annually |
| Policy review | Annually |

---

## 10. Policy Review

### 10.1 Review Schedule

This policy is reviewed:

- Annually (minimum)
- After significant security incidents
- Upon major changes to systems or operations
- When regulations change

### 10.2 Version Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | January 2026 | [Security Lead] | Initial version |

### 10.3 Approval

This policy is approved by:

| Name | Role | Date | Signature |
|------|------|------|-----------|
| | Founder | | |
| | Security Lead | | |

---

# Appendix A: Security Controls Checklist

## Personnel Security

- [ ] All personnel have signed confidentiality agreements
- [ ] Background checks completed for all employees
- [ ] Security training completed by all personnel in last 12 months
- [ ] Acceptable use policy acknowledged by all personnel
- [ ] Offboarding procedures followed for all departures

## Access Control

- [ ] MFA enabled on all accounts with system access
- [ ] VPN configured and mandatory for remote access
- [ ] Access reviews completed this quarter
- [ ] No shared accounts in use
- [ ] Privileged accounts identified and monitored
- [ ] Dormant accounts disabled (90+ days inactive)

## Infrastructure Security

- [ ] All systems running supported operating system versions
- [ ] Critical security patches applied within 7 days
- [ ] Firewall rules reviewed this quarter
- [ ] DDoS protection active on all public endpoints
- [ ] Network segmentation verified

## Application Security

- [ ] No secrets committed to source code (verified by scanning)
- [ ] All dependencies scanned for vulnerabilities
- [ ] Critical dependency vulnerabilities remediated
- [ ] API rate limiting configured
- [ ] Input validation implemented on all endpoints

## Data Security

- [ ] Database encryption enabled
- [ ] TLS 1.3 configured for all external connections
- [ ] Encryption keys rotated in last 12 months
- [ ] Data retention policy enforced
- [ ] Secure deletion verified for offboarded customers

## Monitoring and Logging

- [ ] Centralised logging configured for all systems
- [ ] Security alerts configured and tested
- [ ] Logs retained for 12 months minimum
- [ ] Access to logs restricted and audited

## Backup and Recovery

- [ ] Backup tested within last 90 days
- [ ] Backup restoration verified successful
- [ ] Recovery procedures documented
- [ ] RPO/RTO targets validated

## Incident Response

- [ ] Incident response plan documented
- [ ] Incident response team identified with contact information
- [ ] Communication templates prepared
- [ ] Post-incident review template available

## Third-Party Security

- [ ] All sub-processors have DPAs in place
- [ ] Vendor security assessed in last 12 months
- [ ] Sub-processor list current and published

## Compliance

- [ ] ICO registration current
- [ ] Privacy policy published and current
- [ ] DPIA completed where required
- [ ] Data subject request procedures documented

## Testing

- [ ] Penetration test completed within last 12 months
- [ ] Vulnerability scan completed this month
- [ ] Disaster recovery test completed within last 12 months

---

# Appendix B: Incident Response Playbook

## 1. Detection

### 1.1 Sources of Detection

- Automated monitoring alerts
- User reports
- Third-party notifications
- Anomaly detection

### 1.2 Initial Assessment

When a potential incident is identified:

1. **Verify** the alert is not a false positive
2. **Classify** the incident severity (Critical, High, Medium, Low)
3. **Document** initial findings
4. **Notify** the Incident Commander for High/Critical incidents

### 1.3 Notification Template

```
SECURITY INCIDENT DETECTED

Time: [Timestamp]
Detected by: [Source]
Severity: [Critical/High/Medium/Low]
Description: [Brief description]
Systems affected: [List]
Data potentially affected: [Yes/No/Unknown]
Initial responder: [Name]
```

---

## 2. Containment

### 2.1 Immediate Actions

**For Critical/High Incidents:**

1. Isolate affected systems from network (if active breach)
2. Preserve evidence (do not restart systems)
3. Revoke compromised credentials
4. Block malicious IP addresses/accounts

**For Medium/Low Incidents:**

1. Document current state
2. Monitor for escalation
3. Plan containment actions

### 2.2 Containment Checklist

- [ ] Affected systems identified
- [ ] Systems isolated (if required)
- [ ] Compromised accounts disabled
- [ ] Firewall rules updated (if required)
- [ ] Evidence preserved
- [ ] Containment verified

---

## 3. Eradication

### 3.1 Actions

1. **Identify** root cause
2. **Remove** malware, unauthorised access, or vulnerability
3. **Patch** exploited vulnerabilities
4. **Reset** compromised credentials
5. **Verify** threat removed

### 3.2 Eradication Checklist

- [ ] Root cause identified
- [ ] Malware/threat removed
- [ ] Vulnerability patched
- [ ] Credentials reset
- [ ] Systems scanned for persistence mechanisms
- [ ] Eradication verified

---

## 4. Recovery

### 4.1 Actions

1. **Restore** systems from clean backups (if required)
2. **Verify** system integrity
3. **Re-enable** services gradually
4. **Monitor** closely for recurrence
5. **Confirm** normal operations

### 4.2 Recovery Checklist

- [ ] Clean systems deployed/restored
- [ ] System integrity verified
- [ ] Services re-enabled
- [ ] Enhanced monitoring in place
- [ ] Normal operations confirmed
- [ ] Customers notified (if applicable)

---

## 5. Post-Incident Review

### 5.1 Timeline

- Review scheduled within 3 days of incident closure
- Report completed within 7 days
- Action items assigned with deadlines

### 5.2 Review Agenda

1. Incident timeline reconstruction
2. What happened and why
3. What went well in the response
4. What could be improved
5. Action items and ownership

### 5.3 Post-Incident Report Template

```
POST-INCIDENT REVIEW

Incident ID: [ID]
Date: [Date]
Severity: [Level]
Duration: [Start to resolution]

EXECUTIVE SUMMARY
[2-3 sentence summary]

TIMELINE
[Detailed timeline of events]

ROOT CAUSE
[Description of root cause]

IMPACT
- Systems affected: [List]
- Data affected: [Yes/No, scope]
- Customer impact: [Description]
- Business impact: [Description]

RESPONSE ASSESSMENT
What went well:
- [Item]
- [Item]

What could improve:
- [Item]
- [Item]

ACTION ITEMS
| Action | Owner | Deadline | Status |
|--------|-------|----------|--------|
| | | | |

LESSONS LEARNED
[Summary of key lessons]
```

---

## 6. Contact Information

### Internal Contacts

| Role | Name | Phone | Email |
|------|------|-------|-------|
| Incident Commander | [Name] | [Phone] | [Email] |
| Technical Lead | [Name] | [Phone] | [Email] |
| Communications Lead | [Name] | [Phone] | [Email] |
| Legal | [Name] | [Phone] | [Email] |
| Founder | [Name] | [Phone] | [Email] |

### External Contacts

| Organisation | Purpose | Contact |
|--------------|---------|---------|
| ICO | Data breach notification | 0303 123 1113 |
| Supabase | Infrastructure issues | [Support contact] |
| Legal Counsel | Legal advice | [Contact] |
| Cyber Insurance | Claim notification | [Contact] |

---

## 7. Escalation Matrix

| Severity | Notified Within | Notified Parties |
|----------|-----------------|------------------|
| Critical | Immediate | Founders, All Team, Legal |
| High | 1 hour | Founders, Technical Team |
| Medium | 4 hours | Security Lead, Technical Lead |
| Low | 24 hours | Security Lead |

---

## 8. Communication Templates

### Internal Notification (Critical)

```
Subject: [CRITICAL] Security Incident - Immediate Attention Required

Team,

A critical security incident has been detected. All hands are required.

Severity: Critical
Time detected: [Time]
Bridge call: [Link]
Incident Commander: [Name]

Do not discuss this incident on public channels. Join the bridge immediately.

[Name]
```

### Customer Notification

```
Subject: Important Security Notification from Genesis

Dear [Customer],

We are writing to inform you of a security incident that may have affected your data.

What happened:
[Brief, factual description]

What information was involved:
[Description of data types]

What we are doing:
[Actions taken and planned]

What you can do:
[Recommended actions]

We take the security of your data seriously and apologise for any concern this may cause. If you have questions, please contact us at security@genesis.so.

Sincerely,
The Genesis Team
```

### Regulatory Notification (ICO)

```
Data breach notification to the ICO

Organisation: Genesis
Contact: [Name], [Email], [Phone]
Date/time of breach: [Date/Time]
Date/time breach discovered: [Date/Time]

Categories of data affected:
[List]

Approximate number of individuals affected:
[Number]

Description of breach:
[Factual description]

Likely consequences:
[Assessment]

Measures taken:
[Actions]
```

---

## Verification Checklist

- [x] All 10 sections complete
- [x] Checklist in Appendix A
- [x] Playbook in Appendix B with all 5 phases
- [x] Contact information templates included
- [x] Escalation matrix defined
- [x] Communication templates provided
- [x] Specific enough to be actionable
- [x] Professional enough for investors
