function intersectionRules(executedRules, failedRules) {
    return executedRules.filter(Set.prototype.has, new Set(failedRules));
}