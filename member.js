function skillMembers(req, res, next) {
  const { skillId } = req.params;
  const { limit, offset } = req.query;
  if (!skillId) {
    res.status(400).json({ message: 'Skill ID is required' });
    return;
  }
  const limitValue = limit && !isNaN(limit) ? parseInt(limit, 10) : 10;
  const offsetValue = offset && !isNaN(offset) ? parseInt(offset, 10) : 0;
  const query = {
    where: { skillId },
    limit: limitValue,
    offset: offsetValue,
  };
  MemberSkill.findAll(query)
    .then((members) => {
      res.json({ members });
    })
    .catch(next);
}